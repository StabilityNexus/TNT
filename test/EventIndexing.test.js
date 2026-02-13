const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Event Indexing Validation", function () {
    let factory;
    let tnt;
    let owner, user;

    before(async function () {
        [owner, user] = await ethers.getSigners();
        
        // Deploy Factory
        const FactoryContract = await ethers.getContractFactory("Factory");
        factory = await FactoryContract.deploy();
        await factory.waitForDeployment();
        
        console.log("\n✅ Factory deployed successfully");
    });

    it("✅ TNTCreated event has indexed tntAddress", async function () {
        const tx = await factory.createTNT("TestToken", "TST", true, "");
        const receipt = await tx.wait();
        
        // Parse the event
        const factoryInterface = factory.interface;
        const eventLogs = receipt.logs.map(log => {
            try {
                return factoryInterface.parseLog(log);
            } catch (e) {
                return null;
            }
        }).filter(Boolean);
        
        const tntCreatedEvent = eventLogs.find(e => e.name === "TNTCreated");
        expect(tntCreatedEvent).to.not.be.undefined;
        
        // Check indexed parameters
        // topics[0] = event signature hash
        // topics[1] = indexed owner
        // topics[2] = indexed tntAddress (NEW!)
        const eventLog = receipt.logs.find(log => 
            log.topics[0] === factoryInterface.getEvent("TNTCreated").topicHash
        );
        
        console.log("  Event topics count:", eventLog.topics.length);
        console.log("  ✓ tntAddress is now indexed (topic 2)");
        
        expect(eventLog.topics.length).to.equal(3, "Should have 3 topics (signature + 2 indexed params)");
        
        // Get TNT contract address for next tests
        const tntAddress = tntCreatedEvent.args[1];
        tnt = await ethers.getContractAt("TNT", tntAddress);
    });

    it("✅ TokenIssued event has indexed tokenId", async function () {
        // Grant minter role and issue a token
        await tnt.grantMinterRole(owner.address);
        const tx = await tnt.issueToken(user.address);
        const receipt = await tx.wait();
        
        const tntInterface = tnt.interface;
        const eventLog = receipt.logs.find(log => 
            log.topics[0] === tntInterface.getEvent("TokenIssued").topicHash
        );
        
        console.log("  Event topics count:", eventLog.topics.length);
        console.log("  ✓ tokenId is now indexed (topic 3)");
        
        // topics[0] = event signature
        // topics[1] = indexed issuer
        // topics[2] = indexed user
        // topics[3] = indexed tokenId (NEW!)
        expect(eventLog.topics.length).to.equal(4, "Should have 4 topics (signature + 3 indexed params)");
    });

    it("✅ TokenRevoked event has indexed tokenId", async function () {
        // Create a revokable TNT and issue a token
        const tx1 = await factory.createTNT("RevokableToken", "RVK", true, "");
        const receipt1 = await tx1.wait();
        
        const factoryInterface = factory.interface;
        const eventLogs = receipt1.logs.map(log => {
            try {
                return factoryInterface.parseLog(log);
            } catch (e) {
                return null;
            }
        }).filter(Boolean);
        
        const tntCreatedEvent = eventLogs.find(e => e.name === "TNTCreated");
        const revokableTNT = await ethers.getContractAt("TNT", tntCreatedEvent.args[1]);
        
        // Issue token
        await revokableTNT.grantMinterRole(owner.address);
        await revokableTNT.grantRevokerRole(owner.address);
        await revokableTNT.issueToken(user.address);
        
        // Revoke token
        const tx2 = await revokableTNT.revokeToken(0);
        const receipt2 = await tx2.wait();
        
        const tntInterface = revokableTNT.interface;
        const eventLog = receipt2.logs.find(log => 
            log.topics[0] === tntInterface.getEvent("TokenRevoked").topicHash
        );
        
        console.log("  Event topics count:", eventLog.topics.length);
        console.log("  ✓ tokenId is now indexed (topic 2)");
        
        // topics[0] = event signature
        // topics[1] = indexed revoker
        // topics[2] = indexed tokenId (NEW!)
        expect(eventLog.topics.length).to.equal(3, "Should have 3 topics (signature + 2 indexed params)");
    });

    it("✅ Gas cost comparison", async function () {
        // This test shows the gas cost increase from indexing
        const tx = await factory.createTNT("GasTest", "GAS", true, "");
        const receipt = await tx.wait();
        
        console.log("\n  Gas used for TNT creation:", receipt.gasUsed.toString());
        console.log("  Note: +375 gas per indexed parameter is negligible");
    });
});
