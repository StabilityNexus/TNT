// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./TNTContract.sol";

contract Factory {
    mapping(address => address[]) public deployedTNTs;
    event TNTCreated(address indexed owner, address tntAddress);

    function createTNT(string memory name, string memory symbol, bool revokable) public returns (address) {
        TNT newTNT = new TNT(msg.sender, name, symbol, revokable);
        address tntAddress = address(newTNT);
        deployedTNTs[msg.sender].push(tntAddress);
        emit TNTCreated(msg.sender, tntAddress);
        return tntAddress;
    }

    function getDeployedTNTs(address owner) public view returns (address[] memory) {
        return deployedTNTs[owner];
    }
}