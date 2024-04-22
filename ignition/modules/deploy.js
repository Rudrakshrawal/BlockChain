// imports
const { ethers } = require("hardhat");

// async
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    // console.log(`Contract deployed to: ${simpleStorage.address}`);
    console.log(`Contract deployed to: ${simpleStorage.target}`);

}

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
