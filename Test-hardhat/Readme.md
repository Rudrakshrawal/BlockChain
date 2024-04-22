----------

# Deploying Contracts with HardHat

## Table of Contents
0. [Common Hardhat Errors Reference 🔗](https://hardhat.org/hardhat-runner/docs/errors#hardhat-errors)
1. [Setting up the Environment](#setting-up-the-environment)
    - [Installing Node.js](#installing-nodejs)
      - [For Ubuntu](#for-ubuntu)
      - [For macOS](#for-macos)
    - [Creating a New Hardhat Project](#creating-a-new-hardhat-project)
2. [Configuring Hardhat](#configuring-hardhat)
    - [Installing Hardhat](#installing-hardhat)
    - [Initializing the Project](#initializing-the-project)
    - [Adding Hardhat Toolbox](#adding-hardhat-toolbox)
    - [Modifying the Hardhat Configuration](#modifying-the-hardhat-configuration)
    - [Compiling Contracts](#compiling-contracts)
    - [Checking usage](#check-usage-by-test)
    - [Checking Gas price](#check-gas-price)
    - [Deploying Contracts](#deploying-contracts)

## Setting up the Environment

### Installing Node.js
#### For Ubuntu
```bash
sudo apt update
sudo apt install curl git
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### For macOS
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 20
nvm use 20
nvm alias default 20
npm install npm --global # Upgrade npm to the latest version
```

### Creating a New Hardhat Project
1. Initialize an npm project: 
   ```bash
   npm init
   ```

   #### Follow the prompts to initialize the project.
   
1. Install Hardhat: 
   ```bash
   npm install --save-dev hardhat
   ```
   
2. Initialize the Hardhat project: 
   ```bash
   npx hardhat init
   ```
   <img width="1154" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/2bad1dfd-4d48-4142-8b87-188c3dc770e9">
  
   #### You'll be prompted to choose the project type or create an empty configuration file. The below are the files that will pop up

   <img width="170" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/147bc84b-642b-4b0d-b727-cd5e8dc49e8e">


## Configuring Hardhat

### Installing Hardhat
```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

### Initializing the Project
Follow the prompts to initialize the project and choose the desired project type.

### Adding Hardhat Toolbox
Add the Hardhat Toolbox to your project.

### Modifying the Hardhat Configuration
Update the `hardhat.config.js` file to include the Hardhat Toolbox and specify the desired Solidity version.

```javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
};
```

Adjust the Solidity version according to your project's requirements.

### Compiling Contracts
Compile your contracts using the following command:
```bash
npx hardhat compile
```
<img width="170" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/81e8dfa1-650f-49aa-b79b-3e8a9ea57148">

##### The above are the files that will be created when you compile your solidity file . Sometimes when there are errors after compiling, you can try deleting these two files and compiling them again.


### Check usage by test
(OPTIONAL)


We will also be trying to check the usage of the test i.e how many % of functions are being used. To check that we first will be needing to install the package ```npm install --save-dev solidity-coverage ```


To run :
```
 npx hardhat coverage
```


After this we will be adding a simple line in the ```hardhat.config.js``` file at the top to import this. 
```javascript
require("solidity-coverage")
```

<img width="791" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/5fbab949-7181-4e4c-b485-cd7b3e450450">


### Check Gas price
(OPTIONAL)

Now while deploying a contract one must check the requirement of the gas price by his/her solidity file. For this we will require to install the package

```npm install --save-dev hardhat-gas-reporter ```

In the ```hardhat.config.js``` file at the top we will be importing the hardhat gas reporter through ```require("hardhat-gas-reporter")``` and then add a segment in the ```module.exports``` segment
```javascript
  gasReporter: {
    enabled: true,
  }
```

When the person will run the ```npx hardhat test``` the gas price will automatically show up.

<img width="791" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/6e0d06c1-b37e-48a4-8b86-34c253421752">


### Deploying Contracts


For this next step you will have to configure your ``` hardhat.config.js ``` file 


<img width="595" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/edc4f69b-812a-495f-9e26-c6c86cee0f91">

You can install `npm install dotenv` to generate a dotenv config file where you can store your sensitive information by declaring variables.
After that you can import that dot env file in your `hardhat.config.js` and use the variables declared in the `.env` file as i did using `process.env.variableName` .



#### Deploy your contracts using Hardhat:
```bash
npx hardhat run --network <network_name> ignition/modules/deploy.js
```

Replace `<network_name>` with the name of the network you want to deploy to, such as `sepolia` or `mainnet`.


In this project's case:
```bash
npx hardhat run --network sepolia ignition/modules/deploy.js
```
Now you're ready to deploy your contracts using Hardhat!

----------
