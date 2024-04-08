# Setting environment

## Install docker on OS
https://hub.docker.com




------
# Solidity Audit Tools
Solgraph : ```docker pull devopstestlab/solgraph```
Mythril : ```docker pull mythril/myth```
Slither : ```docker pull trailofbits/eth-security-toolbox```

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
## For mythrill
- ```docker pull mythril/myth``` This will pull the docker image of mythrill
- 






--------
