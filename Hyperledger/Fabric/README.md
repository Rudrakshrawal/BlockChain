# Hyperledger Fabric Test Network Setup

This is a simple and easy documentation of how to install the hyperledger fabric on your node and how can you use the `test-network` directory using the samples provided in the `fabric-samples` directory.

## Before getting started with we must first understand:
### 1. _What is Hyperledger fabric?_
   - **Hyperledger Fabric, part of the Linux Foundation's Hyperledger project, is a permissioned blockchain framework tailored for enterprise applications. It facilitates decentralized applications by offering a modular architecture, where components like consensus mechanisms and membership services can be customized. Fabric ensures privacy and scalability by enabling the creation of multiple channels within a network, allowing for confidential transactions between specific parties. Channels are essentially private sub-networks where only select participants can interact, ensuring data confidentiality. Fabric employs smart contracts, called "chaincode," to execute business logic securely and efficiently. Its aims include enhancing interoperability, security, and scalability in enterprise blockchain deployments, fostering collaboration among diverse industries. By providing a framework for building distributed ledger applications, Fabric aims to streamline business processes, reduce costs, and increase trust among participants.**

### 2. _To create a network using this what all is required? What are the components that are makin this happen ?_
   - In Hyperledger fabric to create a network there are three components which are essential in this, :
     - **Peers** in Hyperledger Fabric are nodes that maintain a copy of the ledger and execute chaincode to perform transactions. They validate and endorse transactions, ensuring consensus before committing them to the ledger. Peers can be categorized into two types: endorsing peers, responsible for executing and endorsing transactions, and committing peers, which validate transactions and update the ledger.
     - **Orderers** in Hyperledger Fabric are responsible for managing the order and delivery of transactions. They receive endorsed transactions from peers, package them into blocks, and ensure their sequential arrangement before distributing them to the network's peers. Orderers maintain the integrity and consistency of the ledger by enforcing a predetermined consensus protocol among network participants.
     - **CA**, or **Certificate Authority**, in Hyperledger Fabric is responsible for managing identities and authenticating participants within the network. It issues digital certificates to network entities, including peers, orderers, and clients, ensuring secure communication and transaction validation. CA plays a crucial role in maintaining the integrity and security of the network by enforcing access control policies and verifying the identity of participants before granting them access to resources and data.
  - These three are the main componets which make up a network in the fabric.

---------

## Prerequisites

Before proceeding, make sure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Go Programming Language](https://golang.org/doc/install)
- [Python](https://www.python.org/downloads/)
- [cURL](https://curl.se/download.html)

---------
## Step-by-Step Guide

      ENSURE THAT YOU HAVE A GOOD INTERNET CONNECTION, DOCKER RUNNING IN THE BACKGROUND, AND THAT THE PATH WHERE YOU ARE GOING
      TO PUT YOUR DIRECTORY IS IN THE USERS PATH.

### 0. Do the directory creation.
  You will need to use a location under `/Users` when installing and running the samples.
  use the command `cd` to get to the `Users` path. After that create a directory of any name, lets take an example:
  ```
  mkdir fabric
  cd fabric
  ```
Before running any git clone commands, run the following commands:
```
git config --global core.autocrlf false
git config --global core.longpaths true
```
You can check the setting of these parameters with the following commands:
```
git config --get core.autocrlf
git config --get core.longpaths
```

You may want to add that to your PATH environment variable so that these can be picked up without fully qualifying the path to each binary. e.g.:
`
export PATH=<path/to/download/location>/bin:$PATH
`





### 1. Clone Fabric Samples Repository

```bash
git clone https://github.com/hyperledger/fabric-samples.git
cd fabric-samples

```

### 2. Setup the Test Network

```bash
cd test-network
curl -sSL https://bit.ly/2ysbOFE | bash -s # for the latest version
curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.2.15 1.5.9 #for a specified version
```
This can take a few moments

### 3. Start the Network
Before starting a network do make sure that you put down any previous network if in use. Use the `./network.sh` command to see what can you do with this.
<img width="1488" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/89b5f5f2-2cec-4505-b5b2-76b264f7b6e4">

```bash
./network.sh down
./network.sh up
```
<img width="1706" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/dc57d7b6-70d1-4ade-87e8-b7c37cb73cb6">

  
### 4. Create a Channel

```bash
./network.sh createChannel
./network.sh createChannel -c channel1 #to rename yourr channel
```
<img width="801" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/17b3ba1d-8683-4068-8c19-25275f04de00">

### 5. Deploy Chaincode(or u can say smart contract)

```bash
./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-go -ccl go
```

### 6. Interact with the Chaincode

#### Query All Assets

```bash
peer chaincode query -C mychannel -n basic -c '{"Args":["GetAllAssets"]}'
```

### 7.Interacting with the network
After you bring up the test network, you can use the peer CLI to interact with your network. The peer CLI allows you to invoke deployed smart contracts, update channels, or install and deploy new smart contracts from the CLI.

Make sure that you are operating from the `test-network directory`. If you followed the instructions to install the Samples, Binaries and Docker Images, You can find the peer binaries in the bin folder of the `fabric-samples` repository. Use the following command to add those binaries to your CLI Path:
```
export PATH=${PWD}/../bin:$PATH
```
You also need to set the FABRIC_CFG_PATH to point to the core.yaml file in the fabric-samples repository:
```
export FABRIC_CFG_PATH=$PWD/../config/
You can now set the environment variables that allow you to operate the peer CLI as Org1:
```
```
# Environment variables for Org1

export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051
```
#### initializing the ledger with assets:

```
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"InitLedger","Args":[]}'
```
If successful, you should see similar output to below:

-> INFO 001 Chaincode invoke successful. result: status:200


#### Query the ledger from your CLI. Run the following command to get the list of assets that were added to your channel ledger:

```peer chaincode query -C mychannel -n basic -c '{"Args":["GetAllAssets"]}'```
Chaincodes are invoked when a network member wants to transfer or change an asset on the ledger. Use the following command to change the owner of an asset on the ledger by invoking the asset-transfer (basic) chaincode:
```
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"TransferAsset","Args":["asset6","Christopher"]}'
```
After we invoke the chaincode, we can use another query to see how the invoke changed the assets on the blockchain ledger. Since we already queried the Org1 peer, we can take this opportunity to query the chaincode running on the Org2 peer. Set the following environment variables to operate as Org2:

```
# Environment variables for Org2

export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org2MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp
export CORE_PEER_ADDRESS=localhost:9051
```


#### Read Asset
You can now query the asset-transfer (basic) chaincode running on peer0.org2.example.com:
```
peer chaincode query -C mychannel -n basic -c '{"Args":["ReadAsset","asset6"]}'
```


### 8. Stop the Network

```bash
./network.sh down
```
<img width="1303" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/79b26201-a63b-48be-ad51-3750e1d1b998">


## Environment Configuration

Before running the interaction commands, ensure the following environment variables are set correctly:

```bash
export PATH=${PWD}/../bin:$PATH
export FABRIC_CFG_PATH=$PWD/../config/
export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051
```



## Further Reading

For more detailed information and troubleshooting, refer to the [Hyperledger Fabric Documentation](https://hyperledger-fabric.readthedocs.io/).
