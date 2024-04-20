# Deploying Smart Contracts with Infura API Key

In this guide, we'll explore how to utilize the API key provided by Infura to deploy a contract on a test network. But before diving into the deployment process, let's familiarize ourselves with some fundamental terms:

## Understanding Key Terms

- **Infura**: Infura stands as a prominent infrastructure provider for Ethereum and other blockchain networks. It offers developers access to Ethereum nodes (both mainnet and testnets) through a managed API service, alleviating the burden of running and maintaining individual Ethereum nodes.
  
- **API (Application Programming Interface)**: An API serves as a set of rules and protocols facilitating communication between different software applications. It defines methods and data formats enabling applications to request and exchange information seamlessly.

Now, let's proceed with the deployment process:

## Creating an Account on Infura

1. Begin by creating an account on the Infura platform.
2. Upon logging in, locate the API option, typically found somewhere on the dashboard or profile settings.

![Infura API Option](https://github.com/Rudrakshrawal/BlockChain/assets/144530387/18821ec7-b012-4203-8b1c-2134c02984c9)

3. Click on the API option to access your unique API key. This key will be utilized in the `hardhat.config.js` file for deploying contracts on the testnet blockchain network.

## Configuration in Hardhat

### Hardhat Configuration
```javascript
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
      port: 7545, // Modify this to a different port number if needed
    },
  },
};
```

### Infura Configuration
```javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.7", // Specify the desired Solidity version
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/YOUR_API_KEY`, // Replace this with your Infura API URL
      accounts: [
        "YOUR_PRIVATE_KEY", // Replace this with your actual private key
      ],
    },
  },
};
```

These configurations serve as the foundation for deploying smart contracts utilizing Infura's API key. Customize the values according to your requirements and ensure the security of sensitive information like private keys.

Feel free to explore additional configurations and options as needed for your project's deployment workflow.
