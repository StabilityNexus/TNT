// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "./TNT.sol";

contract Factory {
    error OnlyDeployedTNT();
    error InvalidIndex();

    mapping(address => address[]) public deployedTNTs;
    mapping(address => address[]) public userTNTs;
    mapping(address => bool) public isDeployedTNT;

    event TNTCreated(address indexed owner, address tntAddress);
    event TokenRegistered(address indexed user, address indexed tntAddress);
    event TokenUnregistered(address indexed user, address indexed tntAddress);

    modifier onlyDeployedTNT() {
        if (!isDeployedTNT[msg.sender]) revert OnlyDeployedTNT();
        _;
    }

    function createTNT(string memory name, string memory symbol, bool revokable, string memory imageURL) public returns (address) {
        TNT newTNT = new TNT(msg.sender, name, symbol, revokable, address(this), imageURL);
        address tntAddr = address(newTNT);
        deployedTNTs[msg.sender].push(tntAddr);
        isDeployedTNT[tntAddr] = true; 
        emit TNTCreated(msg.sender, tntAddr);
        return tntAddr;
    }
    
    function registerIssuedToken(address user, address tntAddr) external onlyDeployedTNT {
        address[] storage userTokens = userTNTs[user];
        uint256 len = userTokens.length;
        
        for (uint256 i = 0; i < len; i++) {
            if (userTokens[i] == tntAddr) return;
        }
        
        userTokens.push(tntAddr);
        emit TokenRegistered(user, tntAddr);
    }

    function unregisterToken(address user, address tntAddr) external onlyDeployedTNT {
        address[] storage userTokens = userTNTs[user];
        uint256 len = userTokens.length;
        
        for (uint256 i = 0; i < len; i++) {
            if (userTokens[i] == tntAddr) {
                userTokens[i] = userTokens[len - 1];
                userTokens.pop();
                emit TokenUnregistered(user, tntAddr);
                break;
            }
        }
    }

    function _getSubArray(address[] memory tokens, uint256 start, uint256 end) internal pure returns (address[] memory) {
        if (start > end || start > tokens.length) revert InvalidIndex();
        if (end >= tokens.length) end = tokens.length;

        uint256 len = end - start;
        address[] memory result = new address[](len);
        for (uint256 i = 0; i < len; i++) {
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
