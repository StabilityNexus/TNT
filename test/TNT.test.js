// SPDX-License-Identifier: MIT
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TNT and Factory Contracts", function () {
    let TNT, Factory;
    let factory, tnt;
    let owner, addr1, addr2;
    let tntAddress;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        const FactoryContract = await ethers.getContractFactory("Factory");
        factory = await FactoryContract.deploy();
        await factory.waitForDeployment();

        const TNTContract = await ethers.getContractFactory("TNT");
        TNT = TNTContract;
    });

    it("should deploy the factory contract", async function () {
        expect(factory.target).to.be.properAddress;
    });

    it("should create a new TNT contract", async function () {
        const tx = await factory.createTNT("TestToken", "TTK", true);
        const receipt = await tx.wait();
        console.log(receipt);
        /*const events = receipt.events.filter((e) => e.event === "TNTCreated");
        tntAddress = events[0].args.tntAddress;
        

        tnt = await ethers.getContractAt("TNT", tntAddress);
        expect(await tnt.name()).to.equal("TestToken");
        expect(await tnt.symbol()).to.equal("TTK");
        expect(await tnt.revokable()).to.equal(true);*/

    });

    it("should issue a token and store metadata", async function () {
        tnt = await ethers.getContractAt("TNT", tntAddress);

        await tnt.grantMinterRole(addr1.address);
        await tnt.connect(addr1).issueToken(addr2.address);

        const tokenId = 0; // First token issued
        const tokenOwner = await tnt.ownerOf(tokenId);
        const issuer = await tnt.tokenIssuers(tokenId);
        const tokenMeta = await tnt.metadata(tokenId);

        expect(tokenOwner).to.equal(addr2.address);
        expect(issuer).to.equal(addr1.address);
        expect(tokenMeta.issuedAt).to.be.a("number");
    });

    it("should revoke a token if revokable", async function () {
        tnt = await ethers.getContractAt("TNT", tntAddress);

        await tnt.grantMinterRole(addr1.address);
        await tnt.grantRevokerRole(addr1.address);

        await tnt.connect(addr1).issueToken(addr2.address);
        const tokenId = 0;

        await expect(tnt.connect(addr1).revokeToken(tokenId))
            .to.emit(tnt, "TokenRevoked")
            .withArgs(addr1.address, tokenId);

        await expect(tnt.ownerOf(tokenId)).to.be.revertedWith("ERC721: invalid token ID");
    });

    it("should prevent revocation if not revokable", async function () {
        const tx = await factory.createTNT("NonRevokableToken", "NRT", false);
        const receipt = await tx.wait();
        const events = receipt.events.filter((e) => e.event === "TNTCreated");
        const nonRevokableTntAddress = events[0].args.tntAddress;

        const nonRevokableTnt = await ethers.getContractAt("TNT", nonRevokableTntAddress);

        await nonRevokableTnt.grantMinterRole(addr1.address);
        await nonRevokableTnt.connect(addr1).issueToken(addr2.address);
        const tokenId = 0;

        await expect(nonRevokableTnt.connect(addr1).revokeToken(tokenId)).to.be.revertedWith("Token is non-revokable");
    });

    it("should allow token owner to burn their token", async function () {
        tnt = await ethers.getContractAt("TNT", tntAddress);

        await tnt.grantMinterRole(addr1.address);
        await tnt.connect(addr1).issueToken(addr2.address);
        const tokenId = 0;

        await expect(tnt.connect(addr2).burnToken(tokenId))
            .to.emit(tnt, "Transfer")
            .withArgs(addr2.address, ethers.constants.AddressZero, tokenId);

        await expect(tnt.ownerOf(tokenId)).to.be.revertedWith("ERC721: invalid token ID");
    });

    it("should restrict transfers of tokens", async function () {
        tnt = await ethers.getContractAt("TNT", tntAddress);

        await tnt.grantMinterRole(addr1.address);
        await tnt.connect(addr1).issueToken(addr2.address);
        const tokenId = 0;

        await expect(
            tnt.connect(addr2).transferFrom(addr2.address, addr1.address, tokenId)
        ).to.be.revertedWith("Err: token transfer is BLOCKED");
    });

    it("should allow the admin to grant roles", async function () {
        tnt = await ethers.getContractAt("TNT", tntAddress);

        await tnt.grantMinterRole(addr1.address);
        const hasMinterRole = await tnt.hasRole(await tnt.MINTER_ROLE(), addr1.address);
        expect(hasMinterRole).to.equal(true);

        await tnt.grantRevokerRole(addr2.address);
        const hasRevokerRole = await tnt.hasRole(await tnt.REVOKER_ROLE(), addr2.address);
        expect(hasRevokerRole).to.equal(true);
    });

    it("should restrict unauthorized role granting", async function () {
        tnt = await ethers.getContractAt("TNT", tntAddress);

        await expect(
            tnt.connect(addr1).grantMinterRole(addr2.address)
        ).to.be.revertedWith("AccessControl: account");
    });

    it("should return deployed TNTs for an owner", async function () {
        const ownerDeployedTNTs = await factory.getDeployedTNTs(owner.address);
        expect(ownerDeployedTNTs).to.include(tntAddress);
    });
});
