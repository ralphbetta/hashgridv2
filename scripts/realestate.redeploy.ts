import { ethers } from "hardhat";

// Utility function to parse token amounts
const tokens = (n: number): bigint => {
  return ethers.parseUnits(n.toString(), "ether");
};

async function main() {
  // Setup accounts
  const [buyer, seller, inspector, lender] = await ethers.getSigners();

  // Deploy RealEstate contract
  const RealEstate = await ethers.getContractFactory("RealEstate");
  const realEstate = await RealEstate.deploy();
  const realEstateAddress = await realEstate.getAddress();
  console.log(`Real Estate deployed at: ${realEstateAddress}`);

  console.log(`Minting 3 properties...\n`);

  for (let i = 0; i < 3; i++) {
    const transaction = await realEstate
      .connect(seller)
      .mint(`https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg`);
    await transaction.wait();
  }

  // Deploy Escrow contract
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(realEstateAddress, seller.address, inspector.address, lender.address);
  const escrowAddress = await escrow.getAddress();
  console.log(`Escrow deployed at: ${escrowAddress}`);

  console.log(`Deployed Escrow Contract at: ${escrowAddress}`);
  console.log(`Listing 3 properties...\n`);

  for (let i = 0; i < 3; i++) {
    // Approve properties
    const transaction = await realEstate.connect(seller).approve(escrowAddress, i + 1);
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

// Execute the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
