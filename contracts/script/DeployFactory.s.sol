// SPDX-License-Identifier: AEL
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/Factory.sol";

contract DeployFactory is Script {
    function run() external {
        // Start broadcasting transactions
        vm.startBroadcast();

        // Deploy the Factory contract
        Factory factory = new Factory();
        
        // Log the address
        console.log("Factory deployed at:", address(factory));
        
        // Stop broadcasting
        vm.stopBroadcast();
        
        // Print deployment information for easy updating in the frontend
        console.log("Update your addresses.ts file with this new contract address:");
        console.log("");
        console.log("export const TNTVaultFactories = {");
        console.log("  534351: \"", address(factory), "\",");
        console.log("  61: \"0x3936A2281A4585E7Bee5710839D0F29fBAF3Fc77\",");
        console.log("} as {");
        console.log("  [key: number]: `0x${string}`;");
        console.log("};");
    }
}
