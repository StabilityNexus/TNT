// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./TNTContract.sol";

contract TNTFactory is Ownable {
    // Mapping from owner address to deployed TNT contracts
    mapping(address => address[]) public deployedTNTContracts;

    // Event emitted when a new TNT contract is created
    event TNTContractCreated(address indexed owner, address tntAddress);

    constructor() Ownable() {}

    /**
     * @dev Creates a new TNT contract and assigns it to the caller.
     * @param name The name of the TNT collection.
     * @param symbol The symbol of the TNT collection.
     * @return The address of the newly created TNT contract.
     */
    function createTNTContract(string memory name, string memory symbol) public returns (address) {
        TNTContract newTNT = new TNTContract(msg.sender, name, symbol);
        address tntAddress = address(newTNT);

        deployedTNTContracts[msg.sender].push(tntAddress);

        emit TNTContractCreated(msg.sender, tntAddress);
        return tntAddress;
    }

    /**
     * @dev Returns all TNT contracts created by the caller.
     * @return A list of TNT contract addresses.
     */
    function getDeployedTNTContracts(address owner) public view returns (address[] memory) {
        return deployedTNTContracts[owner];
    }
}
