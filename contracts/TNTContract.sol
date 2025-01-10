// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract TNTContract is ERC721Enumerable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant REVOKER_ROLE = keccak256("REVOKER_ROLE");

    uint256 private _nextTokenId;
    mapping(uint256 => address) public tokenIssuers;

    // Events
    event TokenIssued(address indexed issuer, address indexed recipient, uint256 tokenId);
    event TokenRevoked(address indexed revoker, uint256 tokenId);

    constructor(
        address admin,
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, admin);
        _setupRole(MINTER_ROLE, admin);
        _setupRole(REVOKER_ROLE, admin);
    }

    /**
     * @dev Issues a trust token to the specified recipient.
     * @param recipient The address to receive the trust token.
     */
    function issueToken(address recipient) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(recipient, tokenId);
        tokenIssuers[tokenId] = msg.sender;

        emit TokenIssued(msg.sender, recipient, tokenId);
    }

    /**
     * @dev Revokes a trust token. Can only be called by the issuer.
     * @param tokenId The ID of the token to revoke.
     */
    function revokeToken(uint256 tokenId) public onlyRole(REVOKER_ROLE) {
        require(tokenIssuers[tokenId] == msg.sender, "You are not the issuer of this token");

        address owner = ownerOf(tokenId);
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
     * @dev Grants minter role to an account.
     * @param account The address to be granted the minter role.
     */
    function grantMinterRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(MINTER_ROLE, account);
    }

    /**
     * @dev Grants revoker role to an account.
     * @param account The address to be granted the revoker role.
     */
    function grantRevokerRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(REVOKER_ROLE, account);
    }

    /**
     * @dev Overrides supportsInterface for AccessControl and ERC721.
     */
    function supportsInterface(bytes4 interfaceId) public view override(ERC721Enumerable, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
