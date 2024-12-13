/* eslint-disable @typescript-eslint/no-require-imports */
const { ethers } = require("hardhat");
const { expect } = require("chai");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  let buyer, seller, inspector, lender;
  let realEstate, escrow;
  let escrowAddress;

  beforeEach(async () => {
    // Setup Accounts
    const signers = await ethers.getSigners(); // this is an array
    [buyer, seller, inspector, lender] = signers; // with parallel assignment;

    // Deploy Real Estate
    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy();

    // Get the address of the deployed RealEstate contract
    const estateAddress = await realEstate.getAddress();
    console.log("Real Estate Contract Address:", estateAddress);

    // Mint the NFT as the seller on behalf of the seller.
    let transaction = await realEstate.connect(seller).mint("https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg");
    await transaction.wait();

    // Deploy Escrow contract with correct address
    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(estateAddress, seller.address, inspector.address, lender.address);

    // Approve property
    escrowAddress = await escrow.getAddress();
    transaction = await realEstate.connect(seller).approve(escrowAddress, 1);
    await transaction.wait();

    // List Property
    transaction = await escrow.connect(seller).list(1, buyer.address, tokens(10), tokens(5));
    await transaction.wait();
  });

  describe("Deployment", () => {
    it("Return NFT Address", async () => {
      const result = await escrow.nftAddress();
      console.log("NFT Address:", result);
      expect(result).to.equal(await realEstate.getAddress());
    });

    it("Return NFT Seller", async () => {
      const result = await escrow.seller();
      console.log("Seller Address:", result);
      expect(result).to.equal(seller.address);
    });

    it("Return NFT Inspector", async () => {
      const result = await escrow.inspector();
      console.log("Inspector Address:", result);
      expect(result).to.equal(inspector.address);
    });

    it("Return NFT Lender", async () => {
      const result = await escrow.lender();
      console.log("Lender Address:", result);
      expect(result).to.equal(lender.address);
    });
  });

  describe("Listing", () => {
    it("Updates as listed", async () => {
      const result = await escrow.isListed(1);
      expect(result).to.be.equal(true);
    });

    it("Returns buyer", async () => {
      const result = await escrow.buyer(1);
      expect(result).to.be.equal(buyer.address);
    });

    it("Returns purchase price", async () => {
      const result = await escrow.purchasePrice(1);
      expect(result).to.be.equal(tokens(10));
    });

    it("Returns escrow amount", async () => {
      const result = await escrow.escrowAmount(1);
      expect(result).to.be.equal(tokens(5));
    });

    it("Updates ownership", async () => {
      expect(await realEstate.ownerOf(1)).to.be.equal(escrowAddress);
    });
  });

  describe("Deposits", () => {
    beforeEach(async () => {
      const transaction = await escrow.connect(buyer).depositEarnest(1, { value: tokens(5) });
      await transaction.wait();
    });

    it("Updates contract balance", async () => {
      const result = await escrow.getBalance();
      expect(result).to.be.equal(tokens(5));
    });
  });

  describe("Inspection", () => {
    beforeEach(async () => {
      const transaction = await escrow.connect(inspector).updateInspectionStatus(1, true);
      await transaction.wait();
    });

    it("Updates inspection status", async () => {
      const result = await escrow.inspectionPassed(1);
      expect(result).to.be.equal(true);
    });
  });

  describe("Approval", () => {
    beforeEach(async () => {
      let transaction = await escrow.connect(seller).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(buyer).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(lender).approveSale(1);
      await transaction.wait();
    });

    it("Update Approval Status", async () => {
      // const result = await escrow.approval(1, seller)
      expect(await escrow.approval(1, buyer.address)).to.be.equal(true);
      expect(await escrow.approval(1, seller.address)).to.be.equal(true);
      expect(await escrow.approval(1, lender.address)).to.be.equal(true);
    });
  });

  describe("Sale", () => {
    beforeEach(async () => {
      let transaction = await escrow.connect(buyer).depositEarnest(1, { value: tokens(5) });
      await transaction.wait();

      transaction = await escrow.connect(inspector).updateInspectionStatus(1, true);
      await transaction.wait();

      transaction = await escrow.connect(buyer).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(seller).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(lender).approveSale(1);
      await transaction.wait();

      const contractAddress = await escrow.getAddress();

      console.log(contractAddress);
      await lender.sendTransaction({ to: contractAddress, value: tokens(5) });

      transaction = await escrow.connect(seller).finalizeSale(1);
      await transaction.wait();

    });

    it("Updates ownership", async () => {
        expect(await realEstate.ownerOf(1)).to.be.equal(buyer.address);
      });

      it("Updates balance", async () => {
        expect(await escrow.getBalance()).to.be.equal(0);
      });

  });
  
});
