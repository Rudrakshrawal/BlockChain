// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   solidity: "0.8.7", // Solidity compiler version

//   networks: {
//     // Ganache local network
//     ganache: {
//       url: "HTTP://192.168.1.4:7545",
//       chainId: 1337, // Ganache chain ID
//       networkId: 5777, // Ganache host URL
//       accounts: [
//         // Specify the private key of the account you want to use as a string
//         "0x7092d080166e4e7a2c0a4ea38cd326d829144a7ea6c600e560ebb2593be30041"
//       ], // Remove the closing bracket here
//     },
//   },
// };

require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("solidity-coverage")
require("hardhat-gas-reporter")

const privateKey = process.env.PRIVATE_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.7", // Set the desired Solidity version
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/etherscanApiKey`,
      accounts: [
        "privateKey", // Replace this with your actual private key
      ],
    },
  },
  gasReporter: {
    enabled: true,
  }
};