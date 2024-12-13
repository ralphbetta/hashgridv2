// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import { ethers } from "hardhat";
import { Contract } from "ethers";
import { Escrow, RealEstate } from "../typechain-types";

// Utility function to parse token amounts
const tokens = (n: number): bigint => {
  return ethers.parseUnits(n.toString(), "ether");
};

async function main() {
  // Setup accounts
  const [buyer, seller, inspector, lender] = await ethers.getSigners();

  // Deploy Real Estate contract
  // Deploy Real Estate contract
  const RealEstateFactory = await ethers.getContractFactory("RealEstate");
  const realEstate = (await RealEstateFactory.deploy()) as RealEstate;
  await realEstate.deployed();
  
  console.log(`Deployed Real Estate Contract at: ${realEstate.address}`);
  console.log(`Minting 3 properties...\n`);

  for (let i = 0; i < 3; i++) {
    const transaction = await realEstate
      .connect(seller).mint(`https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/${i + 1}.json`);
    await transaction.wait();
  }

  // Deploy Escrow contract
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = (await Escrow.deploy(realEstate.address, seller.address, inspector.address, lender.address)) as Escrow;
  await escrow.deployed();

  console.log(`Deployed Escrow Contract at: ${escrow.address}`);
  console.log(`Listing 3 properties...\n`);

  for (let i = 0; i < 3; i++) {
    // Approve properties
    const transaction = await realEstate
      .connect(seller).approve(escrow.address, i + 1);
    await transaction.wait();
  }

  // Listing properties
  let transaction = await escrow
    .connect(seller)
    .list(1, buyer.address, tokens(20), tokens(10));
  await transaction.wait();

  transaction = await escrow
    .connect(seller)
    .list(2, buyer.address, tokens(15), tokens(5));
  await transaction.wait();

  transaction = await escrow
    .connect(seller)
    .list(3, buyer.address, tokens(10), tokens(5));
  await transaction.wait();

  console.log(`Finished.`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
