// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title IFactory
 * @dev Interface for the Factory contract to register issued TNTs.
 */
interface IFactory {
    function registerIssuedToken(address user, address tntAddress) external;
}

/**
 * @title TNT
 * @dev A trust-based non-transferable token contract with optional revocation support.
 */
contract TNT is ERC721, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant REVOKER_ROLE = keccak256("REVOKER_ROLE");

    uint256 private _nextTokenId;
    mapping(uint256 => address) public tokenIssuers;
    mapping(address => uint256[]) private _tokensByRecipient;
    bool public immutable revokable;
    address public factoryContract;
    string public imageURL;

    /**
     * @dev Struct to store metadata related to a token.
     */
    struct TokenMetadata {
        uint256 issuedAt; // Timestamp when the token was issued
    }

    mapping(uint256 => TokenMetadata) public metadata;

    /// @dev Event emitted when a token is issued.
    event TokenIssued(address indexed issuer, address indexed recipient, uint256 tokenId);

    /// @dev Event emitted when a token is revoked.
    event TokenRevoked(address indexed revoker, uint256 tokenId);

    /**
     * @dev Constructor to initialize the contract.
     * @param admin The address of the contract administrator.
     * @param name The name of the token.
     * @param symbol The symbol of the token.
     * @param _revokable Boolean indicating if the token can be revoked.
     * @param _factoryContract Address of the factory contract.
     * @param _imageURL contains the image associated with the token
     */
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

    /**
     * @dev Issues a new trust token to a recipient.
     * @param recipient The address receiving the token.
     */
    function issueToken(address recipient) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(recipient, tokenId);
        tokenIssuers[tokenId] = msg.sender;
        metadata[tokenId] = TokenMetadata(block.timestamp);
        _tokensByRecipient[recipient].push(tokenId);

        // Notify the factory contract about the issued token
        IFactory(factoryContract).registerIssuedToken(recipient, address(this));

        emit TokenIssued(msg.sender, recipient, tokenId);
    }

    function tokenImageURL() public view returns (string memory) {
        return imageURL;
    }

    /**
     * @dev Revokes a trust token if revocation is enabled.
     * @param tokenId The ID of the token to revoke.
     */
    function revokeToken(uint256 tokenId) public onlyRole(REVOKER_ROLE) {
        require(revokable, "Token is non-revokable");
        require(tokenIssuers[tokenId] == msg.sender, "You are not the issuer");
        _burn(tokenId);
        emit TokenRevoked(msg.sender, tokenId);
    }

    /**
     * @dev Allows the owner of a token to burn it.
     * @param tokenId The ID of the token to burn.
     */
    function burnToken(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "You do not own this token");
        _burn(tokenId);
    }

    /**
     * @dev Returns the list of tokens issued to a recipient and their issuers.
     * @param user The address of the user.
     * @return tokenIds The list of token IDs issued to the user.
     * @return issuers The list of addresses that issued each token.
     */
    function getIssuedTokens(address user) public view returns (uint256[] memory tokenIds, address[] memory issuers) {
        uint256 length = _tokensByRecipient[user].length;
        tokenIds = new uint256[](length);
        issuers = new address[](length);

        for (uint256 i = 0; i < length; i++) {
            tokenIds[i] = _tokensByRecipient[user][i];
            issuers[i] = tokenIssuers[tokenIds[i]];
        }
    }

    /**
     * @dev Hook that is called before any token transfer.
     * It prevents all transfers except for minting and burning.
     */
    function _update(address to, uint256 tokenId, address auth) 
    internal 
    override 
    returns (address) 
    {
        address from = super._update(to, tokenId, auth);

        if (from != address(0) && to != address(0)) {
            revert("TNTs are non-transferable");
        }

        return from;
    }

    /**
     * @dev Grants the minter role to an account.
     * @param account The address to be granted the minter role.
     */
    function grantMinterRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(MINTER_ROLE, account);
    }

    /**
     * @dev Grants the revoker role to an account.
     * @param account The address to be granted the revoker role.
     */
    function grantRevokerRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(REVOKER_ROLE, account);
    }

    /**
     * @dev Overrides supportsInterface to include AccessControl and ERC721 support.
     */
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
