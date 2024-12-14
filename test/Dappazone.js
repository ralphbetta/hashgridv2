/* eslint-disable @typescript-eslint/no-require-imports */
const { ethers } = require("hardhat");
const { expect } = require("chai");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), "ether");
};

const ID = 1;
const NAME = "Shoes";
const CATEGORY = "Clothing";
const IMAGE = "IMAGE";
const COST = tokens(5);
const RATING = 4;
const STOCK = 5;

describe("Dappazone", () => {
  let dappazone;
  let deployer, buyer;

  beforeEach(async () => {
    // SETUP ACCOUNT
    const signers = await ethers.getSigners();
    [deployer, buyer] = signers;

    // DEPLOY
    const Dappazone = await ethers.getContractFactory("Dappazone");
    dappazone = await Dappazone.deploy();
  });

  describe("Deployment", () => {
    it("It has a name", async () => {
      const name = await dappazone.name();
      expect(name).to.equal("Dappazone");
    });

    it("It has an owner", async () => {
      const owner = await dappazone.owner();
      const deployerAddress = deployer.address;
      expect(owner).to.equal(deployerAddress);
    });
  });

  describe("Listing Product", () => {
    let transaction;

    beforeEach(async () => {
      transaction = await dappazone.connect(deployer).listProduct(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK);
      await transaction.wait();
    });

    it("Return Item Attribut", async () => {
      const products = await dappazone.products(ID);
      expect(products.id).to.equal(ID);
      expect(products.name).to.equal(NAME);
      expect(products.category).to.equal(CATEGORY);
      expect(products.image).to.equal(IMAGE);
      expect(products.cost).to.equal(COST);
      expect(products.rating).to.equal(RATING);
      expect(products.stock).to.equal(STOCK);
    });

    it("Emit Listed Product Event", async () => {
      expect(transaction).to.emit(dappazone, "NewList");
    });
  });

  describe("Buying Product", () => {
    let transaction;

    beforeEach(async () => {
      transaction = await dappazone.connect(deployer).listProduct(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK);
      await transaction.wait();

      transaction = await dappazone.connect(buyer).buy(ID, { value: COST });
      await transaction.wait();
    });

    it("Should have listed product", async () => {
      const products = await dappazone.products(ID);
      expect(products.id).to.equal(ID);
    });

    it("Should have contract balance updated", async () => {
      const contractAddress = await dappazone.getAddress();
      const result = await ethers.provider.getBalance(contractAddress);
      expect(result).to.equal(COST);
    });

    it("Should update buyer's order count", async () => {
      const orderCount = await dappazone.orderCount(buyer.address);
      expect(orderCount).to.equal(1);
    });

    it("Should be added to buyer's order list", async () => {
      const order = await dappazone.orders(buyer.address, 1);
      expect(order.time).to.be.greaterThan(0);
      expect(order.product.name).to.equal(NAME);
    });

    it("Emit Buy Product Event", async () => {
        expect(transaction).to.emit(dappazone, "Buy");
      });
  });
});
