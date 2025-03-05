// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./TNT.sol";

/**
 * @title Factory
 * @dev A factory contract to deploy and manage instances of the TNT contract.
 */
contract Factory {
    /// @dev Mapping to store TNT contracts deployed by each owner.
    mapping(address => address[]) public deployedTNTs;

    /// @dev Event emitted when a new TNT contract is created.
    event TNTCreated(address indexed owner, address tntAddress);

    /**
     * @dev Creates a new TNT contract.
     * @param name The name of the TNT token.
     * @param symbol The symbol of the TNT token.
     * @param revokable Whether the token is revokable or not.
     * @return The address of the newly deployed TNT contract.
     */
    function createTNT(string memory name, string memory symbol, bool revokable) public returns (address) {
        TNT newTNT = new TNT(msg.sender, name, symbol, revokable);
        address tntAddress = address(newTNT);
        deployedTNTs[msg.sender].push(tntAddress);
        emit TNTCreated(msg.sender, tntAddress);
        return tntAddress;
    }

    /**
     * @dev Returns all TNT contracts deployed by a specific owner.
     * @param owner The address of the owner.
     * @return An array of TNT contract addresses deployed by the owner.
     */
    function getDeployedTNTs(address owner) public view returns (address[] memory) {
        return deployedTNTs[owner];
    }
}
