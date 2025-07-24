// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./TNT.sol";

contract Factory {
    mapping(address => address[]) public deployedTNTs;
    mapping(address => address[]) public userTNTs;
    mapping(address => bool) public isDeployedTNT; // Track deployed TNT contracts

    event TNTCreated(address indexed owner, address tntAddress);
    event TokenRegistered(address indexed user, address indexed tntAddress);
    event TokenUnregistered(address indexed user, address indexed tntAddress);

    constructor(address _initialOwner) Ownable(_initialOwner) { }

    modifier onlyDeployedTNT() {
        require(isDeployedTNT[msg.sender], "Only deployed TNT contracts can call this function");
        _;
    }

    function createTNT(string memory name, string memory symbol, bool revokable, string memory imageURL) public returns (address)
    {
        TNT newTNT = new TNT(msg.sender, name, symbol, revokable, address(this), imageURL);
        address tntAddress = address(newTNT);
        deployedTNTs[msg.sender].push(tntAddress);
        isDeployedTNT[tntAddress] = true; 
        emit TNTCreated(msg.sender, tntAddress);
        return tntAddress;
    }
    
    function registerIssuedToken(address user, address tntAddress) external onlyDeployedTNT {
        bool alreadyRegistered = false;
        for (uint256 i = 0; i < userTNTs[user].length; i++) {
            if (userTNTs[user][i] == tntAddress) {
                alreadyRegistered = true;
                break;
            }
        }
        if (!alreadyRegistered) {
            userTNTs[user].push(tntAddress);
            emit TokenRegistered(user, tntAddress);
        }
    }

    function unregisterToken(address user, address tntAddress) external onlyDeployedTNT {
        for (uint256 i = 0; i < userTNTs[user].length; i++) {                        // Remove the TNT address from user's list when they have no more active tokens
            if (userTNTs[user][i] == tntAddress) {
                userTNTs[user][i] = userTNTs[user][userTNTs[user].length - 1];
                userTNTs[user].pop();
                emit TokenUnregistered(user, tntAddress);
                break;
            }
        }
    }

    function _getSubArray(address[] memory tokens, uint256 start, uint256 end) internal pure returns (address[] memory) {
        require(start <= end, "Start index must be less than or equal to end index");
        require(start <= tokens.length, "Start index out of bounds");

        if (end >= tokens.length) 
            end = tokens.length;

        uint256 resultLength = end - start;
        address[] memory result = new address[](resultLength);

        for (uint256 i = 0; i < resultLength; i++) {
            result[i] = tokens[start + i];
        }        
        return result;
    }

    function getDeployedTNTs(address owner) public view returns (address[] memory) { return deployedTNTs[owner]; }
    function getUserTNTs(address user) public view returns (address[] memory) { return userTNTs[user]; }

    function getPageUserTNTs(address user, uint256 start, uint256 end) external view returns (address[] memory) { return _getSubArray(getUserTNTs(user), start, end);}
    function getPageDeployedTNTs(address owner, uint256 start, uint256 end) external view returns (address[] memory) { return _getSubArray(getDeployedTNTs(owner), start, end);}
    
    function getUserTNTCount(address user) external view returns (uint256) { return userTNTs[user].length; }
    function getDeployedTNTCount(address owner) external view returns (uint256) { return deployedTNTs[owner].length; }
}
