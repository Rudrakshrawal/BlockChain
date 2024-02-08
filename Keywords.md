# Keywords
--------
1. **Blockchain**:   The decentralized and distributed ledger technology that securely records transactions across a network of computers.
2. **Cryptocurrency**:Digital or virtual currency that uses cryptography for security and operates on decentralized networks, often based on blockchain.
3. **Bitcoin**:   The first and most well-known cryptocurrency, introduced by an unknown person or group using the pseudonym Satoshi Nakamoto.
4. **Decentralization**:   The distribution of control and decision-making across a network rather than relying on a single central authority.
5. **Consensus Mechanism**:   The process by which participants in a blockchain network agree on the validity of transactions and the state of the ledger. Examples include Proof of Work (PoW) and Proof of Stake (PoS).
6. **Mining**:   The process of validating transactions and adding new blocks to the blockchain through computational effort. Commonly associated with PoW.
7. **Node**:   A participant in the blockchain network that maintains a copy of the entire ledger and participates in transaction validation.
8. **Immutable**:   The quality of data on the blockchain being tamper-resistant and unchangeable once confirmed and added to the ledger.
9. **Wallet** :  A digital tool or application that allows users to store, manage, and transact with their cryptocurrencies.
10. **Hash Function**:    A cryptographic function that takes an input (or message) and produces a fixed-size string of characters, typically representing a digest. A hash function is a mathematical algorithm that transforms input data into a fixed-size string of characters, called a hash value. It is deterministic, produces a unique output for each input, and is widely used for data integrity, digital signatures, password storage, and in blockchain technology for linking blocks securely.
11. **Fork**:    A split or divergence in the blockchain, resulting in two separate chains with different transaction histories.
12. **DApp** (Decentralized Application):    An application that runs on a decentralized network (blockchain) rather than a centralized server.
13. **Permissionless Blockchain**:     A blockchain where anyone can participate, validate transactions, and contribute to the network.
14. **Token**:      A unit of value issued by a project on the blockchain, often representing ownership or access rights.
15. **Private Key / Public Key**:     In asymmetric cryptography, a pair of keys used for secure communication. The private key is kept secret, while the public key is shared.
16. **SSL(secure Socket Layer)**: a deprecated cryptographic protocol that ensures secure communication over a computer network, commonly used to secure internet transactions and data transfer. It establishes a secure connection by encrypting the data exchanged between a user's web browser and a web server
17. **RSA (Rivest–Shamir–Adleman)**: a widely used public-key cryptosystem for secure data transmission and digital signatures. Utilizing a pair of keys – a public key for encryption and a private key for decryption. Its security relies on the difficulty of factoring large numbers. RSA is commonly employed for secure communication, digital signatures, and securing internet connections through protocols like SSL/TLS.
18. **Elliptic curve**: Elliptic Curve Cryptography (ECC) is a way to keep information safe when it travels over the internet. Instead of using long passwords, ECC uses special curves in mathematics to create a pair of keys – one public key everyone can see and one private key that's kept secret. Even though the public key is known, it's incredibly hard for someone to figure out the private key. ECC is like having a secret code that's tough to crack, making online transactions and communications secure and efficient.
19. **CipherText**: cyphertext is the result of encryption performed on plaintext using an algorithm, called a cipher. Ciphertext is also known as encrypted or encoded information because it contains a form of the original plaintext that is unreadable by a human or computer without the proper cipher to decrypt it.
20. **Hash Function**: A hash function is a mathematical function that takes an input (or "message") and produces a fixed-size string of characters or numbers, which is typically of a much smaller size than the input data. This output is called a hash value or hash code.
21. **Bitcoin halving**: Bitcoin halving is an event programmed into the Bitcoin protocol that occurs approximately every four years, reducing the block reward received by miners by half. It plays a crucial role in controlling the supply of bitcoins and has significant implications for the economics and security of the Bitcoin network.
22. **Sharding**: sharding is a powerful technique for improving scalability and performance in distributed systems by dividing data into smaller, more manageable parts and distributing them across multiple servers.
23. **Erratta**: refers to errors or mistakes found in cryptographic algorithms, protocols, or implementations. These errors can have significant implications for security, potentially leading to vulnerabilities or weaknesses that could be exploited by attackers
24. **TPS(Transactions Per Second)**: TPS refers to the number of transactions that a blockchain network can handle in a given time frame, usually measured in seconds. It's an important metric for evaluating the scalability and efficiency of blockchain networks, as higher TPS indicates that the network can handle more transactions per unit of time, thus accommodating increased user demand and supporting broader adoption.
25. **ECC (Eliptic curve cryptography)** : ECC(Just like RSA ,it uses public & private key) provides efficient and secure cryptographic operations based on the mathematical properties of elliptic curves, making it a valuable tool in modern cryptography.
26. **HTTP 1/2/3**: major version of the Hypertext Transfer Protocol (HTTP). People as of the now(feb 2024) are preffering to shift to the second version whereas the third version is also gaining momentum, but will take time to be adapted.
27. **Digital signing authority**:  a digital signing authority plays a critical role in enabling secure digital communications by issuing trusted digital certificates and digital signatures, which help verify the authenticity and integrity of digital content and transactions.
28. **Session key**:  a session key is a temporary cryptographic key used to encrypt and decrypt data exchanged during a single communication session, providing confidentiality, integrity, and enhanced security for the communication. Made with the help of public key. 
------------
## Algorithms:
- Advanced Encryption Standard (AES):
**_AES is a symmetric encryption algorithm established as a standard by the U.S. National Institute of Standards and Technology (NIST) in 2001_**.
  * Key Sizes: AES supports key sizes of 128, 192, or 256 bits.
  * Block Size: Operates on 128-bit blocks of data.
  * Operation: Employs a substitution-permutation network structure with a variable number of rounds (10 rounds for 128-bit keys, 12 rounds for 192-bit keys, and 14 rounds for 256-bit keys).
  * Security Features: AES is widely used and considered secure against known cryptographic attacks when using appropriate key sizes.
     * AES key - The AES key is a binary sequence of bits that determines how the encryption and decryption processes are applied. The length of the key significantly influences the security of the encryption.


- Shor's algorithm:
  **_A groundbreaking algorithm that can efficiently factor large integers, a task that classical computers struggle with._**
  * Purpose: Shor's algorithm is designed to efficiently factorize large integers into their prime factors.
  * Impact: If large-scale quantum computers are realized, Shor's algorithm would break widely used public-key cryptosystems, including RSA, by efficiently factorizing the product of large prime numbers.

   * ![IMG_2805](https://github.com/Rudrakshrawal/Quantum/assets/144530387/7554df0e-eb0d-4391-b1a0-56e1643c68a1)


- Cipher:
 _**A cipher algorithm is a set of rules or procedures used to encrypt or decrypt data. It's a systematic method for transforming plaintext (original message) into ciphertext (encoded message) and vice versa. Cipher algorithms are used to secure communication and protect sensitive information from unauthorized access.**_

  *![image](https://github.com/Rudrakshrawal/BlockChain/assets/144530387/86b22b67-2e5f-4467-9c5c-b2fae5b0c480)


- Secure Hash Algorithm:
  **_A cryptographic hash function used to generate fixed-size hash values from input data. It ensures data integrity and authenticity by producing a unique hash value for each input. SHA variants like SHA-1, SHA-256, and SHA-512 differ in hash length and security levels._**
   *SHA-1 (Secure Hash Algorithm 1):
* * Produces a 160-bit hash value (20 bytes).
  * Widely used in the past but is now considered vulnerable to collision attacks, where two different inputs produce the same hash value.
  * Due to its vulnerabilities, its usage is discouraged, especially in security-sensitive applications.
* SHA-256 (Secure Hash Algorithm 256):
* * Produces a 256-bit hash value (32 bytes).
  * Provides a higher level of security compared to SHA-1.
  * Widely used in modern cryptographic applications, including digital signatures, SSL/TLS certificates, and integrity verification of data.
* SHA-512 (Secure Hash Algorithm 512):
* * Produces a 512-bit hash value (64 bytes).
  * Offers even greater security compared to SHA-256 due to its longer hash length.
  * Less commonly used compared to SHA-256 due to its longer hash length, but it is preferred for applications that require stronger security guarantees.


 
- Double rachet algorithm:
  **_The Double Ratchet Algorithm is a cryptographic algorithm used for secure end-to-end messaging with forward secrecy and message synchronization. It is commonly used in secure messaging applications like Signal and WhatsApp._**



######   _Refer to symmetric encryption_


  * https://nfil.dev/coding/encryption/python/double-ratchet-example/     (For Deeeeeeeppppp knowledge and implementation)
  * Key Ratcheting:
  * * Each party generates a chain of symmetric encryption keys (**root key, sending chain key, and receiving chain key**).
    * After each message sent or received, the sending and receiving chain keys are updated, "ratcheting" the keys forward.
    * This ensures that even if one message's key is compromised, future messages remain secure.
  * Forward Secrecy:
  * * Each message is encrypted with a unique key derived from the sending chain key.
    * If a sending chain key is compromised, only messages encrypted with that key are vulnerable.
    *  Previous and subsequent messages remain secure because they use different keys.
  * Message Synchronization:
  * * A header attached to each message includes information about the current state of the sending and receiving chains.
    * This allows parties to synchronize their keys and maintain message continuity, even if messages are sent out of order or delayed.
   
  - - X3DH:
      **_X3DH, which stands for "Extended Triple Diffie-Hellman ," is a key agreement protocol used to establish secure communication channels in end-to-end encryption systems._**
      **_This algorithm is an extended verios of Triple Diffie-Hellman key exchange algorithm_**
      * * Public parameters. both parties agree on public parameters.
        * Private keys. each party generates its own private key.
        * public key. each party calculates its public key and shares it with the other user.
        * Both parties use the received public keys and their own private keys to compute the shared secret key.
        * The calculated shared secret K is the same for both parties, even though they never directly exchanged their private keys. This shared secret can then be used as a symmetric encryption key for secure communication.
----------
# Establishing a secure connection between a client and a server in HTTPS.

* _Server Certificate Check_:
* * The client (e.g., a web browser) initiates a connection request to the server (e.g., a website) and receives the server's digital certificate.
  * The client checks the server's certificate to ensure it is valid and trusted. This involves verifying that the certificate is issued by a trusted certificate authority (CA) and that it has not expired or been revoked.
  * If the server's certificate passes these checks, the client proceeds with the connection. Otherwise, it may terminate the connection or display a warning to the user.
*  _Key Exchange_:
*  * After verifying the server's certificate, the client and server perform a key exchange to establish a shared secret key for secure communication.
   * This key exchange is typically done using asymmetric cryptography, where the client and server exchange public keys and use them to derive a shared secret key without exposing it to potential eavesdroppers.
   * Common key exchange protocols include Diffie-Hellman (DH) and its variants, such as Elliptic Curve Diffie-Hellman (ECDH).
* _Encrypted Tunnel for Data Transmission_:
* * With the shared secret key established, the client and server use symmetric-key cryptography to encrypt and decrypt data transmitted over the connection.
  * They negotiate encryption parameters, such as the encryption algorithm and key lengths, and then use the shared secret key to encrypt data using symmetric encryption algorithms like AES (Advanced Encryption Standard).
  * This creates an encrypted tunnel or channel through which data can securely traverse the network, protecting it from interception or tampering by unauthorized parties.
 
 ### _The process of establishing a secure connection involves verifying the server's certificate, performing a key exchange to establish a shared secret key, and using symmetric-key cryptography to encrypt data transmitted over the connection. This ensures confidentiality, integrity, and authenticity of the communication between the client and server._
--------
*  **Encryption:** Encryption is a process that transforms information into an unreadable format using an algorithm and a key.Encryption is a process that converts readable data (plaintext) into an unreadable form (ciphertext) using an algorithm and a key. It ensures data confidentiality and security by making information inaccessible without the proper decryption key.
  * Types of encryption:
     * Symmetric encryption - {Is the one which even the Quantum computers can't break}
     * * **_Symmetric encryption is a cryptographic technique where the same key is used for both encryption and decryption of data. Symmetric encryption is a cryptographic technique where a single secret key is used for both encryption and decryption. It is efficient, fast, and well-suited for encrypting large volumes of data, but the security relies on keeping the key secret from unauthorized parties. _**
       * common algorithms used : DES, AES


   ![image](https://github.com/Rudrakshrawal/BlockChain/assets/144530387/ea09af38-eee6-4215-a777-b8e540eaafa7)





   * Asymmetric encryption -
   * * **_Asymmetric encryption, also known as public-key cryptography, is a cryptographic technique that uses two different keys: a public key and a private key. _**
     * common algorithms used : RSA, ECC



![image](https://github.com/Rudrakshrawal/BlockChain/assets/144530387/6c0a16d2-baa8-460b-a90b-14491921ca0e)

----------------------
## The three Cryptographic algorithms.
- **Ceiser/Cipher**: his is one of the simplest and oldest encryption techniques. it involves shifting each letter in the plaintext by a fixed number of positions down or up the alphabet.
- **Classic**: This term generally refers to traditional cryptographic techniques used before the advent of modern computer-based cryptography. 
- **Post Quantum**: This refers to cryptographic algorithms and protocols designed to be secure against attacks by quantum computers

---------------
# Extras.. Or some things idk where to put😃👍..
### What is wire shark?
- Wireshark is a versatile and powerful tool for network administrators, security professionals, developers, and anyone else who needs to analyze and troubleshoot network communication. It helps users gain insight into network behavior, diagnose network problems, and ensure the security and efficiency of computer networks.