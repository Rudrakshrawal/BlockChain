
// Load the contract ABI (Application Binary Interface)
var contractAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "VotedEvent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidatesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Connect to the local Ethereum node
var web3 = new Web3(Web3.givenProvider);


// Contract address deployed on the blockchain
var contractAddress = '0x2fC6D71EAc56f3F1840D783598CA4Ec3E755623F';

// Instantiate the contract object
var contract = new web3.eth.Contract(contractAbi, contractAddress);

// Function to populate candidates dropdown
async function populateCandidates() {
    try {
        var candidatesCount = await contract.methods.candidatesCount().call();
        var select = document.getElementById("candidateSelect");
        var votesTableBody = document.getElementById("votesTableBody");

        // Clear existing options and table rows
        select.innerHTML = "";
        votesTableBody.innerHTML = "";

        // Populate candidates dropdown and table
        for (var i = 1; i <= candidatesCount; i++) {
            var candidate = await contract.methods.candidates(i).call();
            var option = document.createElement("option");
            option.value = i;
            option.text = "Candidate " + i;
            select.appendChild(option);

            var row = votesTableBody.insertRow();
            row.insertCell(0).textContent = "Candidate " + i;
            row.insertCell(1).textContent = candidate.voteCount;
        }
    } catch (error) {
        console.error("Error fetching candidates and votes:", error);
    }
}

// Function to handle voting
function vote() {
    var candidateId = document.getElementById("candidateSelect").value;
    contract.methods.vote(candidateId).send({ from: web3.eth.defaultAccount })
        .on('transactionHash', function (hash) {
            console.log("Vote transaction hash:", hash);
            console.log("VOTING DONE!!\n Waiting for the transaction reciept..")
        })
        .on('receipt', function (receipt) {
            console.log("Vote receipt:", receipt);
            console.log("VOTING SUCCESSFUL!!")
            // You can add further UI updates here if needed
        })
        .on('error', function (error, receipt) {
            console.error("Vote error:", error);
        });
}

// Function to handle getting candidate votes and displaying them on the webpage
async function getCandidateVotes() {
    try {
        var candidatesCount = await contract.methods.candidatesCount().call();
        var tableBody = document.getElementById("votesTableBody");
        tableBody.innerHTML = ""; // Clear existing table rows
        for (var i = 1; i <= candidatesCount; i++) {
            var candidate = await contract.methods.candidates(i).call();
            var row = tableBody.insertRow();
            var nameCell = row.insertCell(0);
            var voteCell = row.insertCell(1);
            nameCell.innerHTML = "Candidate " + i;
            voteCell.innerHTML = candidate.voteCount;
        }
    } catch (error) {
        console.error("Error fetching candidates and votes:", error);
    }
}
// Function to handle MetaMask connection
// Function to handle MetaMask connection
async function connectMetamask() {
    try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length === 0) {
            throw new Error("No accounts found in MetaMask");
        }
        web3.eth.defaultAccount = accounts[0];
        console.log("Connected! Default account:", web3.eth.defaultAccount);
        populateCandidates();
        document.getElementById("connectButton").style.display = "none";
        document.getElementById("connectedButton").style.display = "block";
    } catch (error) {
        console.error("Metamask connection error:", error);
    }
}


// Ensure Metamask is connected and fetch the default account
if (window.ethereum && window.ethereum.isMetaMask) {
    document.getElementById("connectButton").addEventListener("click", connectMetamask);
    console.log("Metamask Connected! Default account:", web3.eth.defaultAccount);
} else {
    console.error("MetaMask not detected. Please download metamask first.");
}

// Function to handle MetaMask disconnection
function handleDisconnect() {
    console.log("MetaMask disconnected");
    // You can add any additional handling here if needed
}

// Ensure MetaMask is connected and fetch the default account
if (window.ethereum && window.ethereum.isMetaMask) {
    window.ethereum.on('disconnect', handleDisconnect);
    document.getElementById("connectButton").addEventListener("click", connectMetamask);
} else {
    console.error("MetaMask not detected.");
}
