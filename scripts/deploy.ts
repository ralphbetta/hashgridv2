/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from "hardhat";

const tokens = (n: number) => {
  return ethers.parseUnits(n.toString(), "ether");
};

async function main() {
  // Setup accounts
  const [deployer] = await ethers.getSigners();

  // Deploy RealEstate contract
  const Dappazone = await ethers.getContractFactory("Dappazone");
  const contractInstance = await Dappazone.deploy();
  const contractAddress = await contractInstance.getAddress();

  console.log(`Dappazonee deployed at: ${contractAddress}`);


  // List many items using foreloop - OR

  const ID = 1;
  const NAME = "Shoes";
  const CATEGORY = "Clothing";
  const IMAGE = "IMAGE";
  const COST = tokens(5);
  const RATING = 4;
  const STOCK = 5;

  const transaction = await contractInstance.connect(deployer).listProduct(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK);

  await transaction.wait();

}
// Execute the main functionx
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
