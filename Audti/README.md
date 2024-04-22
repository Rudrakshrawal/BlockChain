
## Install docker on OS
https://hub.docker.com




------
# Solidity Audit Tools
Solgraph : ```docker pull devopstestlab/solgraph```


Slither : ```docker pull trailofbits/eth-security-toolbox```


Surya : ``` npm install -g surya```

sol2uml : ``` npm link sol2uml --only=production ```


------
_**You can chek the path for files using the command :**_ 
```pwd```

-----
## For solgraph

- Create a directory ```mkdir data```
- Create a sol file ```vi MyContract.sol```
- Run solgraph : ```docker run -it --rm -v $PWD:/data devopstestlab/solgraph```
  - **it**: short for interactive      
- After running it with success
- Go to data direct and see the image generated to see untrusted elements
-![IMG_3442](https://github.com/Rudrakshrawal/BlockChain/assets/144530387/7c6b47ab-926e-42f3-89cb-fbf09f0e08c2)



  


-------

## For slither
[reference](https://medium.com/@abhijeet.sinha383/test-solidity-contract-file-using-slither-testing-tool-4f7e3e8692dd)

- Create a directory ```mkdir Audit```
- Create a sol file ```vi SimpleStorage1.sol```
- Pull Docker Image for slither : `docker pull trailofbits/eth-security-toolbox`
- Run it : `docker run -it -v $PWD:/Audit trailofbits/eth-security-toolbox `     [ $PWD:/Audit is the path to the file ]
- <img width="1071" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/25ace4d7-deea-4155-b034-0ae20a29847e">
- open a new terminal, run the command ```docker ps``` to see the list of id's.
- after that use the ```sudo docker cp $(pwd)/mycontract.sol 1735b05a0022:/home/ethsec``` command to copy the file to docker file
- <img width="1071" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/dfdb8387-9d07-4f4d-b76c-4edbf7bc9440">
- after copying the file go to the previous terminal and run the docker image of slither on that file using the ```slither SimpleStorage1.sol```
- <img width="1071" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/e7b92878-690b-402a-90cc-e32f509d07d6">
- After that we'll run another command ```slither-check-erc SimpleStorage1.sol SimpleStorage```  to check the ERC-20 token status of your contract
- <img width="636" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/419d5c20-d926-4010-9763-6b615a30572d">


----------
## For surya 
[For reference](https://github.com/Consensys/surya/blob/master/README.md)
- ```npm install -g surya``` This will install the surya audit package
- ```brew install graphviz``` This will install graphwiz which has the dot function
- The `graph` command outputs a DOT-formatted graph of the control flow.
```shell
surya graph contracts/**/*.sol | dot -Tpng > MyContract.png
```
<img width="541" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/cc0ab70c-82a8-465c-96f5-eaf42ca4c1fa">

- The `ftrace` command outputs a _treefied_ function call trace stemming from the defined "CONTRACT::FUNCTION" and traversing "all|internal|external" types of calls.
External calls are marked in `orange` and internal calls are `uncolored`.
```shell
surya ftrace APMRegistry::_newRepo all MyContract.sol
```
- The `describe` command shows a summary of the contracts and methods in the files provided.
```shell
surya describe *.sol //put the name of the contract in the place of '*' . In my case the command will be surya describe SimpleStorage1.sol
```
- to get the Tpng image
  ```
  surya graph SimpleStorage1.sol | dot -Tpng > MyContract.png
  ```

--------------------------

# For sol2uml
[For reference](https://github.com/naddison36/sol2uml)

- ```npm link sol2uml --only=production``` to install the package
- ```npm upgrade sol2uml -g``` to upgrade
- ```sol2uml class ./contracts/FileName.sol``` To generate a diagram of all contracts under the contracts folder and its sub folders
<img width="310" alt="image" src="https://github.com/Rudrakshrawal/BlockChain/assets/144530387/f222697c-4c94-41c7-be9f-b5a1f5b75ff8">

-`Usage: sol2uml storage [options] <fileFolderAddress>` <== The command
  ```

Visually display a contract's storage slots.

WARNING: sol2uml does not use the Solidity compiler so may differ with solc. A known example is fixed-sized arrays declared with an expression will fail to be sized.

Arguments:
  fileFolderAddress               file name, folder(s) or contract address.
                                  When a folder is used, all *.sol files in that folder and all sub folders are used.
                                  A comma-separated list of files and folders can also be used. For example
                                        sol2uml contracts,node_modules/openzeppelin-solidity
                                  If an Ethereum address with a 0x prefix is passed, the verified source code from Etherscan will be used. For example
                                        sol2uml 0x79fEbF6B9F76853EDBcBc913e6aAE8232cFB9De9

Options:
  -c, --contract <name>           Contract name in the local Solidity files. Not needed when using an address as the first argument as the contract name can be derived from Etherscan.
  -cf, --contractFile <filename>  Filename the contract is located in. This can include the relative path to the desired file.
  -d, --data                      Gets the values in the storage slots from an Ethereum node. (default: false)
  -s, --storage <address>         The address of the contract with the storage values. This will be different from the contract with the code if a proxy contract is used. This is not needed if `fileFolderAddress` is an address and the contract is not proxied.
  -u, --url <url>                 URL of the Ethereum node to get storage values if the `data` option is used. (default: "http://localhost:8545", env: NODE_URL)
  -bn, --block <number>           Block number to get the contract storage values from. (default: "latest")
  -sn, --slotNames <names>        Comma-separated list of slot names when accessed by assembly. The names can be a string, which will be hashed to a slot, or a 32 bytes hexadecimal string with a 0x prefix.
  -st, --slotTypes <types>        Comma-separated list of types for the slots listed in the `slotNames` option. eg address,uint256,bool. If all types are the same, a single type can be used. eg address (default: ["bytes32"])
  -a, --array <number>            Number of slots to display at the start and end of arrays. (default: "2")
  -hx, --hideExpand <variables>   Comma-separated list of storage variables to not expand. That's arrays, structs, strings or bytes.
  -hv, --hideValues               Hide storage slot value column. (default: false)
  -h, --help                      display help for command

```


--------
