const { ethers } = require("hardhat");

async function main() {
  // Deploy Election contract
  const Election = await ethers.getContractFactory("Election");
  console.log("Deploying Election contract...");
  const election = await Election.deploy(); // Corrected from waitForDeployment()

  await election.waitForDeployment(); // Wait for deployment confirmation
  console.log("Election contract deployed to:", election.target);//ONE OF THE MAIN ERRORS
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
