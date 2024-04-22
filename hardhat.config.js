// To deploy on Your choice of network, in this case i used sepolia

// require("./.env")

// require("@nomicfoundation/hardhat-toolbox");
// module.exports = {
//   solidity: "0.8.7", // Set the desired Solidity version
//   networks: {
//     sepolia: {
//       url: `https://sepolia.infura.io/v3/myAPIKey`, //Repalce with 
//       accounts: [
//         "myPrivateKet", // Replace this with your actual private key
//       ],
//     },
//   },
// };



//To deploy on ganache client

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

