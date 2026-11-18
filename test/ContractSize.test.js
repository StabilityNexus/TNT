const { expect } = require("chai");
const { artifacts } = require("hardhat");

// EIP-170 rejects deployed bytecode larger than 24576 bytes.
const EIP170_MAX_DEPLOYED_BYTECODE = 24576;

describe("Contract size", function () {
    it("keeps Factory within the EIP-170 deployed bytecode limit", async function () {
        const artifact = await artifacts.readArtifact("Factory");
        const deployedSize = (artifact.deployedBytecode.length - 2) / 2;

        console.log(`Factory deployed bytecode: ${deployedSize} bytes`);
        expect(deployedSize).to.be.at.most(EIP170_MAX_DEPLOYED_BYTECODE);
    });
});
