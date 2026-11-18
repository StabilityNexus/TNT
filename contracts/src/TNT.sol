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
    error InvalidPageSize();
    error NonTransferable();

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant REVOKER_ROLE = keccak256("REVOKER_ROLE");
    uint256 public constant MAX_TOKEN_PAGE_SIZE = 100;

    uint256 private _nextTokenId;
    mapping(uint256 => address) public tokenIssuers;
    mapping(address => uint256[]) public _tokensByUser;  
    mapping(address => uint256[]) public _allTokensByUser;
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
        _allTokensByUser[user].push(tokenId);
        
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
        if (tokenIssuers[tokenId] != msg.sender) revert NotIssuer();
        
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
    
    /// @dev Legacy unbounded getter. Prefer getActiveTokensPaginated for
    /// large token histories.
    function getActiveTokens(address user) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        return _getTokenPage(_tokensByUser[user], 0, _tokensByUser[user].length);
    }

    function getActiveTokensPaginated(address user, uint256 offset, uint256 limit) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        if (limit > MAX_TOKEN_PAGE_SIZE) revert InvalidPageSize();
        return _getTokenPage(_tokensByUser[user], offset, offset + limit);
    }

    /// @dev Legacy unbounded getter. Prefer getAllIssuedTokensPaginated for
    /// large token histories.
    function getAllIssuedTokens(address user) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        return _getTokenPage(_allTokensByUser[user], 0, _allTokensByUser[user].length);
    }

    function getAllIssuedTokensPaginated(address user, uint256 offset, uint256 limit) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        if (limit > MAX_TOKEN_PAGE_SIZE) revert InvalidPageSize();
        return _getTokenPage(_allTokensByUser[user], offset, offset + limit);
    }

    function _getTokenPage(uint256[] storage tokenIdList, uint256 start, uint256 end) internal view returns (uint256[] memory tokenIds, address[] memory issuers) {
        uint256 len = tokenIdList.length;
        if (start > end || start > len) revert InvalidIndex();
        if (end > len) end = len;

        uint256 count = end - start;
        tokenIds = new uint256[](count);
        issuers = new address[](count);

        for (uint256 i = 0; i < count; i++) {
            uint256 tokenId = tokenIdList[start + i];
            tokenIds[i] = tokenId;
            issuers[i] = tokenIssuers[tokenId];
        }
    }

    function hasActiveTokens(address user) public view returns (bool) { return _tokensByUser[user].length > 0; }
    function getActiveTokenCount(address user) public view returns (uint256) { return _tokensByUser[user].length; }
    function getAllIssuedTokenCount(address user) public view returns (uint256) { return _allTokensByUser[user].length; }
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

    function getRecipients(uint256 start, uint256 end) public view returns (address[] memory) {
        return getUsers(start, end);
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
