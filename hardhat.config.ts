// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.28",
// };

// export default config;


import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18", // Match with the Solidity version used in contracts
  paths: {
    sources: "./contracts", // Points to your contracts folder
    artifacts: "./artifacts", // Compiled output
    cache: "./cache",
  },
};

export default config;
