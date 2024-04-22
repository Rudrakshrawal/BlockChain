// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   solidity: "0.8.7", // Set the desired Solidity version
//   networks: {
//     sepolia: {
//       url: `https://sepolia.infura.io/v3/d45290eb3e824dfb918fe2ce3296fe84`,
//       accounts: [
//         "abd7dc2e6aedf266c6779d94567a9691600cd56284edbb0d93cffbf7bc8b7136", // Replace this with your actual private key
//       ],
//     },
//   },
// };



/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.7",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545", // Ganache default RPC server URL
      chainId: 1337 // Ganache default chain ID
    }
  }
};

