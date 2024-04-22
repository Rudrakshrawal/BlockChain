
---------
# Election Smart Contract

This smart contract, written in Solidity, enables the management of an election by allowing users to vote for candidates. Below is an overview of the functionalities and structure of the contract:

## Contract Structure

The ```Election``` contract consists of the following components:

- **Candidate Struct**: Defines the structure of a candidate, including their ID, name, and vote count.

- **Candidates Mapping**: Stores the list of candidates where the key is the candidate ID and the value is the `Candidate` struct.

- **Voters Mapping**: Keeps track of which accounts have voted for which candidates.

- **Candidates Count**: Stores the total number of candidates.

## Functions

- **Constructor**: Initializes the contract by adding five initial candidates.

- **Add Candidate**: Adds a new candidate to the election with the provided name.

- **Vote**: Allows a user to cast their vote for a specific candidate. Updates the candidate's vote count and records the vote in the `voters` mapping.

## Events

- **VotedEvent**: Emits an event whenever a user casts their vote, indicating the candidate ID and the address of the voter.

## Usage

To use the contract, deploy it to the Ethereum blockchain. Users can then interact with the contract by calling the `vote` function to cast their votes for their preferred candidates.

### Example

```solidity
// Deploy the contract
Election election = new Election();

// Vote for a candidate
election.vote(candidateId);
```

## Commands

- **Compile**: To compile the smart contracts, run:
  ```
  npx hardhat compile
  ```

- **Deploy**: To deploy the smart contracts to a network, run:
  ```
  npx hardhat run ignition/modules/deploy.js --network <network-name>
  ```
  in this contract's case
  ```
  npx hardhat run ignition/modules/deploy.js --network sepolia
  ```

- **Test**: To run the tests, execute:
  ```
  npx hardhat test
  ```

- **Coverage**: To generate code coverage reports, use:
  ```
  npx hardhat coverage
  ```

- **Help**: For more options and commands, refer to the Hardhat documentation:
  ```
  npx hardhat help
  ```
  ------------
  ### Doing this you will successfully create a smart contract, its deploy and test script using javascript, you will be able to install a framework available on the internet (in this case hardhat) which will help you to compile your project and deploy it on the specified network (in this case sepolia). You will get the transaction hash value which can be used by you to to check the real time implementation of consensus mechanism, the mining of block, the gas fees, and many more . You can check this on [Etherscan](etherscan.io).
-------------
  
## Note

Ensure that the contract is deployed on a blockchain network compatible with Solidity version 0.8.7 or higher.

For more information on deploying and interacting with Ethereum smart contracts, refer to the Ethereum documentation and web3.js documentation.

----

