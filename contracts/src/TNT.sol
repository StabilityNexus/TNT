// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

interface IFactory {
    function registerIssuedToken(address user, address tntAddress) external;
    function unregisterToken(address user, address tntAddress) external;
}

contract TNT is ERC721, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant REVOKER_ROLE = keccak256("REVOKER_ROLE");

    uint256 private _nextTokenId;
    mapping(uint256 => address) public tokenIssuers;
    mapping(address => uint256[]) public _tokensByRecipient;        // All tokens ever issued to user
    mapping(address => uint256[]) public _activeTokensByRecipient;  // Only active (non-burned/non-revoked) tokens
    address[] public _allRecipients;                                // Array to track all recipients
    mapping(address => bool) public _isRecipient;                   // Track if address is already in recipients array
    bool public immutable revokable;
    address public factoryContract;
    string public imageURL;

    struct TokenMetadata {
        uint256 issuedAt; // Timestamp when the token was issued
    }

    mapping(uint256 => TokenMetadata) public metadata;

    event TokenIssued(address indexed issuer, address indexed recipient, uint256 tokenId);
    event TokenRevoked(address indexed revoker, uint256 tokenId);

    constructor(
        address admin,                          // The address of the contract administrator.
        string memory name,                     // The name of the token.
        string memory symbol,                   // The symbol of the token.
        bool _revokable,                        // Boolean indicating if the token can be revoked.
        address _factoryContract,               // Address of the factory contract.
        string memory _imageURL                 // The image URL of the token.
    ) ERC721(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MINTER_ROLE, admin);
        _grantRole(REVOKER_ROLE, admin);
        revokable = _revokable;
        factoryContract = _factoryContract;
        imageURL = _imageURL;
    }

    function issueToken(address recipient) public onlyRole(MINTER_ROLE) {
        require(recipient != address(0), "Invalid recipient address");
        uint256 tokenId = _nextTokenId++;
        _safeMint(recipient, tokenId);
        tokenIssuers[tokenId] = msg.sender;
        metadata[tokenId] = TokenMetadata(block.timestamp);
        _tokensByRecipient[recipient].push(tokenId);
        _activeTokensByRecipient[recipient].push(tokenId);
        
        // Add to recipients array if first token for this user
        if (!_isRecipient[recipient]) {
            _allRecipients.push(recipient);
            _isRecipient[recipient] = true;
        }
        emit TokenIssued(msg.sender, recipient, tokenId);
        IFactory(factoryContract).registerIssuedToken(recipient, address(this));                // External call moved to end to prevent reentrancy
    }
    
    function setImageURL(string memory newURL) external onlyRole(DEFAULT_ADMIN_ROLE) {
        imageURL = newURL;
    }
    
    function revokeToken(uint256 tokenId) public onlyRole(REVOKER_ROLE) {
        require(revokable, "Token is non-revokable");
        require(tokenIssuers[tokenId] == msg.sender, "You are not the issuer");
        
        address tokenOwner = ownerOf(tokenId);
        _removeTokenFromActiveList(tokenOwner, tokenId);
        _burn(tokenId);
        emit TokenRevoked(msg.sender, tokenId);
        
        if (_activeTokensByRecipient[tokenOwner].length == 0) {                                // External call moved to end to prevent reentrancy
            IFactory(factoryContract).unregisterToken(tokenOwner, address(this));
        }
    }

    function burnToken(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "You do not own this token");
        _removeTokenFromActiveList(msg.sender, tokenId);
        _burn(tokenId);
        if (_activeTokensByRecipient[msg.sender].length == 0) {                               // External call moved to end to prevent reentrancy
            IFactory(factoryContract).unregisterToken(msg.sender, address(this));
        }
    }

    function _removeTokenFromActiveList(address user, uint256 tokenId) internal {
        uint256[] storage activeTokens = _activeTokensByRecipient[user];
        for (uint256 i = 0; i < activeTokens.length; i++) {
            if (activeTokens[i] == tokenId) {
                activeTokens[i] = activeTokens[activeTokens.length - 1];
                activeTokens.pop();
                break;
            }
        }
    }
    
    function getAllIssuedTokens(address user) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        uint256 length = _tokensByRecipient[user].length;
        tokenIds = new uint256[](length);
        issuers = new address[](length);

        for (uint256 i = 0; i < length; i++) {                        // Get all tokens ever issued to a user (including burned/revoked)
            tokenIds[i] = _tokensByRecipient[user][i];
            issuers[i] = tokenIssuers[tokenIds[i]];
        }
    }

    // Get only active tokens for a user
    function getActiveTokens(address user) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        uint256 length = _activeTokensByRecipient[user].length;
        tokenIds = new uint256[](length);
        issuers = new address[](length);

        for (uint256 i = 0; i < length; i++) {
            tokenIds[i] = _activeTokensByRecipient[user][i];
            issuers[i] = tokenIssuers[tokenIds[i]];
        }
    }

    function hasActiveTokens(address user) public view returns (bool) { return _activeTokensByRecipient[user].length > 0; }
    function getActiveTokenCount(address user) public view returns (uint256) { return _activeTokensByRecipient[user].length; }
    function getAllParticipantsCount() public view returns (uint256) { return _allRecipients.length; }

    function getRecipients(uint256 start, uint256 end) public view returns (address[] memory) {
        require(start <= end, "Start index must be less than or equal to end index");
        require(start <= _allRecipients.length, "Start index out of bounds");

        if (end >= _allRecipients.length) {
            end = _allRecipients.length;
        }

        uint256 resultLength = end - start;
        address[] memory result = new address[](resultLength);
        for (uint256 i = 0; i < resultLength; i++) {
            result[i] = _allRecipients[start + i];
        }
        return result;
    }

    // Hook that is called before any token transfer. It prevents all transfers except for minting and burning.
    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = super._update(to, tokenId, auth);
        if (from != address(0) && to != address(0))  revert("TNTs are non-transferable");
        return from;
    }

    function grantMinterRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) { grantRole(MINTER_ROLE, account); }
    function grantRevokerRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) { grantRole(REVOKER_ROLE, account); }
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl) returns (bool) { return super.supportsInterface(interfaceId); }
}
