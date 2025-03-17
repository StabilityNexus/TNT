// SPDX-License-Identifier: MIT
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TNT and Factory Contracts", function () {
    let TNT, Factory;
    let factory, tnt, nonRevokableTnt;
    let owner, addr1, addr2;
    let tntAddress, nonRevokableTntAddress;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        const FactoryContract = await ethers.getContractFactory("Factory");
        factory = await FactoryContract.deploy();
        await factory.waitForDeployment();

        const TNTContract = await ethers.getContractFactory("TNT");
        TNT = TNTContract;

        // Deploy revokable TNT
        let tx = await factory.createTNT("TestToken", "TTK", true);
        let receipt = await tx.wait();
        let event = receipt.logs.find(
            (log) => 'fragment' in log && log.fragment.name === 'TNTCreated'
        );
        tntAddress = event.args[1];
        tnt = await ethers.getContractAt("TNT", tntAddress);

        // Deploy non-revokable TNT
        tx = await factory.createTNT("NonRevokableToken", "NRT", false);
        receipt = await tx.wait();
        event = receipt.logs.find(
            (log) => 'fragment' in log && log.fragment.name === 'TNTCreated'
        );
        nonRevokableTntAddress = event.args[1];
        nonRevokableTnt = await ethers.getContractAt("TNT", nonRevokableTntAddress);

        // Issue a token for revocation and burning tests
        await nonRevokableTnt.grantMinterRole(addr1.address);
        await nonRevokableTnt.connect(addr1).issueToken(addr1.address);
    });

    it("should deploy the factory contract", async function () {
        expect(factory.target).to.be.properAddress;
    });

    it("should create a new TNT contract", async function () {
        expect(tntAddress).to.not.be.undefined;
        expect(await tnt.name()).to.equal("TestToken");
        expect(await tnt.symbol()).to.equal("TTK");
        expect(await tnt.revokable()).to.equal(true);
    });

    it("should issue a token and store metadata", async function () {
        await tnt.grantMinterRole(addr1.address);
        await tnt.connect(addr1).issueToken(addr2.address);

        const tokenId = 0;
        expect(await tnt.ownerOf(tokenId)).to.equal(addr2.address);
        expect(await tnt.tokenIssuers(tokenId)).to.equal(addr1.address);
    });

    it("should revoke a token if revokable", async function () {
        await tnt.grantMinterRole(addr1.address);
        await tnt.grantRole(await tnt.REVOKER_ROLE(), addr1.address); // ✅ assign REVOKER_ROLE
        await tnt.connect(addr1).issueToken(addr2.address);
    
        const tokenId = 0;
        await expect(tnt.connect(addr1).revokeToken(tokenId))
            .to.emit(tnt, "Transfer")
            .withArgs(addr2.address, ethers.ZeroAddress, tokenId);
    });
    
    it("should prevent revocation if not revokable", async function () {
        const tokenId = 0;
        await expect(
            nonRevokableTnt.connect(owner).revokeToken(tokenId)
        ).to.be.revertedWith("Token is non-revokable");
    });
    
    it("should restrict transfers of tokens", async function () {
        await tnt.grantMinterRole(addr1.address);
        await tnt.connect(addr1).issueToken(addr2.address);
        const tokenId = 0;

        await expect(
            tnt.connect(addr2).transferFrom(addr2.address, addr1.address, tokenId)
        ).to.be.revertedWith("TNTs are non-transferable");
    });

    it("should allow the admin to grant roles", async function () {
        await tnt.grantMinterRole(addr1.address);
        expect(await tnt.hasRole(await tnt.MINTER_ROLE(), addr1.address)).to.equal(true);

        await tnt.grantRevokerRole(addr2.address);
        expect(await tnt.hasRole(await tnt.REVOKER_ROLE(), addr2.address)).to.equal(true);
    });

    it("should restrict unauthorized role granting", async function () {
        await expect(
            tnt.connect(addr1).grantMinterRole(addr2.address)
        ).to.be.reverted; // If your contract uses a custom error, you may replace this with a specific error
    });

    it("should return deployed TNTs for an owner", async function () {
        const ownerDeployedTNTs = await factory.getDeployedTNTs(owner.address);
        expect(ownerDeployedTNTs).to.include(tntAddress);
        expect(ownerDeployedTNTs).to.include(nonRevokableTntAddress);
    });

    it("should correctly update issued token mapping", async function () {
        await tnt.grantMinterRole(addr1.address);
        await tnt.connect(addr1).issueToken(addr2.address);
        
        const tokenId = 0;
        const tokenOwner = await tnt.ownerOf(tokenId);
        const tokenIssuer = await tnt.tokenIssuers(tokenId);
    
        expect(tokenOwner).to.equal(addr2.address);
        expect(tokenIssuer).to.equal(addr1.address);
    });
});
