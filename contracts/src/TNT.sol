// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

interface IFactory {
    function registerIssuedToken(address user, address tntAddress) external;
    function unregisterToken(address user, address tntAddress) external;
}

contract TNT is ERC721, AccessControl {
    error InvalidUser();
    error NotRevokable();
    error NotIssuer();
    error NotOwner();
    error InvalidIndex();
    error NonTransferable();

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant REVOKER_ROLE = keccak256("REVOKER_ROLE");

    uint256 private _nextTokenId;
    mapping(uint256 => address) public tokenIssuers;
    mapping(address => uint256[]) public _tokensByUser;  
    address[] public _allUsers;                                
    mapping(address => bool) public _isUser;                   
    bool public immutable revokable;
    address public factoryContract;
    string public imageURL;

    struct TokenMetadata {
        uint256 issuedAt;
    }

    mapping(uint256 => TokenMetadata) public metadata;

    event TokenIssued(address indexed issuer, address indexed user, uint256 indexed tokenId);
    event TokenRevoked(address indexed revoker, uint256 indexed tokenId);
    event TokenBurned(address indexed issuer, address indexed burner, uint256 indexed tokenId);

    constructor(
        address admin,
        string memory name,
        string memory symbol,
        bool _revokable,
        address _factoryContract,
        string memory _imageURL
    ) ERC721(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MINTER_ROLE, admin);
        _grantRole(REVOKER_ROLE, admin);
        revokable = _revokable;
        factoryContract = _factoryContract;
        imageURL = _imageURL;
    }

    function issueToken(address user) public onlyRole(MINTER_ROLE) {
        if (user == address(0)) revert InvalidUser();
        
        uint256 tokenId = _nextTokenId++;
        _safeMint(user, tokenId);
        tokenIssuers[tokenId] = msg.sender;
        metadata[tokenId] = TokenMetadata(block.timestamp);
        _tokensByUser[user].push(tokenId);
        
        if (!_isUser[user]) {
            _allUsers.push(user);
            _isUser[user] = true;
        }
        emit TokenIssued(msg.sender, user, tokenId);
        IFactory(factoryContract).registerIssuedToken(user, address(this));
    }
    
    function setImageURL(string memory newURL) external onlyRole(DEFAULT_ADMIN_ROLE) {
        imageURL = newURL;
    }
    
    function revokeToken(uint256 tokenId) public onlyRole(REVOKER_ROLE) {
        if (!revokable) revert NotRevokable();
        
        address tokenOwner = ownerOf(tokenId);
        _removeFromActive(tokenOwner, tokenId);
        _burn(tokenId);
        emit TokenRevoked(msg.sender, tokenId);
        
        if (_tokensByUser[tokenOwner].length == 0) {
            IFactory(factoryContract).unregisterToken(tokenOwner, address(this));
        }
    }

    function burnToken(uint256 tokenId) public {
        if (ownerOf(tokenId) != msg.sender) revert NotOwner();
        _removeFromActive(msg.sender, tokenId);
        _burn(tokenId);
        emit TokenBurned(tokenIssuers[tokenId], msg.sender, tokenId);
        
        if (_tokensByUser[msg.sender].length == 0) {
            IFactory(factoryContract).unregisterToken(msg.sender, address(this));
        }
    }

    function _removeFromActive(address user, uint256 tokenId) internal {
        uint256[] storage active = _tokensByUser[user];
        uint256 len = active.length;
        for (uint256 i = 0; i < len; i++) {
            if (active[i] == tokenId) {
                active[i] = active[len - 1];
                active.pop();
                break;
            }
        }
    }
    
    function getActiveTokens(address user) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        uint256 len = _tokensByUser[user].length;
        tokenIds = new uint256[](len);
        issuers = new address[](len);

        for (uint256 i = 0; i < len; i++) {
            tokenIds[i] = _tokensByUser[user][i];
            issuers[i] = tokenIssuers[tokenIds[i]];
        }
    }

    function hasActiveTokens(address user) public view returns (bool) { return _tokensByUser[user].length > 0; }
    function getActiveTokenCount(address user) public view returns (uint256) { return _tokensByUser[user].length; }
    function getAllParticipantsCount() public view returns (uint256) { return _allUsers.length; }

    function getUsers(uint256 start, uint256 end) public view returns (address[] memory) {
        if (start > end || start > _allUsers.length) revert InvalidIndex();
        if (end >= _allUsers.length)  end = _allUsers.length;

        uint256 len = end - start;
        address[] memory result = new address[](len);
        for (uint256 i = 0; i < len; i++) {
            result[i] = _allUsers[start + i];
        }
        return result;
    }

    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = super._update(to, tokenId, auth);
        if (from != address(0) && to != address(0)) revert NonTransferable();
        return from;
    }

    function grantMinterRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) { grantRole(MINTER_ROLE, account); }
    function grantRevokerRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) { grantRole(REVOKER_ROLE, account); }
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl) returns (bool) { return super.supportsInterface(interfaceId); }
}