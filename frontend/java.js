document.addEventListener('DOMContentLoaded', async () => {
    // Connect to Ethereum network
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
        return;
    }

    // Contract ABI and address
    const contractABI = [
        // Your contract ABI here
    ];
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';

    // Initialize contract instance
    const simpleStorageContract = new web3.eth.Contract(contractABI, contractAddress);

    // Function to store favorite number
    window.storeNumber = async () => {
        const favoriteNumber = parseInt(document.getElementById('numberInput').value);
        await simpleStorageContract.methods.store(favoriteNumber).send({ from: web3.eth.defaultAccount });
        console.log('Favorite number stored:', favoriteNumber);
    };

    // Function to add person
    window.addPerson = async () => {
        const name = document.getElementById('nameInput').value;
        const favoriteNumber = parseInt(document.getElementById('personNumberInput').value);
        await simpleStorageContract.methods.addPerson(name, favoriteNumber).send({ from: web3.eth.defaultAccount });
        console.log('Person added:', name, favoriteNumber);
    };

    // Function to retrieve favorite number
    window.retrieveNumber = async () => {
        const storedNumber = await simpleStorageContract.methods.retrieve().call();
        document.getElementById('favoriteNumber').innerText = storedNumber;
    };

    // Call retrieve function initially
    retrieveNumber();
});
