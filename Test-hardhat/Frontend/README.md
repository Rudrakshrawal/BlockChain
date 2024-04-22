# Getting Started with the Dapp

Welcome to the frontend of our Decentralized Application (DApp)! In this guide, we'll walk you through how to run and interact with these files.

## What are these two files?

These two files comprise the frontend of our DApp. They provide the user interface for interacting with the decentralized voting application.

## How to run?

To run these files, follow these steps:

1. **Clone the Repository**: First, clone this repository by running the following command in your terminal:
   ```
   git clone https://github.com/Rudrakshrawal/BlockChain.git
   ```
   Ensure that you have Git installed on your system.

2. **Open in VS Code**: Open the cloned repository in Visual Studio Code (VS Code). Navigate to `BlockChain/Test-hardhat/Frontend` directory.

3. **Open index.html**: Open the `index.html` file located in the `Frontend` directory.

4. **Set up Live Server**: You can run the `index.html` file on a local server. There are two options to set up a local server:
   - Install the "Live Server" extension for VS Code from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
   - Alternatively, you can install the `http-server` package using npm:
     ```
     npm install http-server
     ```

5. **Launch the Server**: Once you have set up the local server, you can either:
   - Run the `http-server` command in the terminal.
   - Click on the "Go Live" button in the VS Code taskbar.

6. **Ensure MetaMask Extension**: This frontend requires the MetaMask extension in your browser. Make sure you have MetaMask installed and set up in your browser.

7. **Connect Wallet**: Connect your MetaMask wallet to the frontend. This will enable you to vote in the decentralized election.

8. **Vote**: Choose your preferred candidate from the dropdown menu. MetaMask will prompt you to approve the transaction. Once approved, your vote will be recorded on the blockchain.

9. **Check Votes**: After voting, you can click the "Check Votes" button to update the table below with the latest vote counts. Be patient as the transaction is mined into a block. You can monitor the progress in the console, where the transaction hash will be displayed.

By following these steps, you can run and interact with the frontend of our decentralized voting application. Happy voting!
