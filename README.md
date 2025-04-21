
# 🗳️ DAO Voting dApp

**A Blockchain Governance Voting Interface** 

This project implements a comprehensive blockchain-based governance system, empowering token holders to actively participate in decentralized decision-making. The platform provides a transparent, secure, and user-friendly interface for proposal creation, voting, and governance tracking.



| Feature                   | Description                                                                |
|---------------------------|----------------------------------------------------------------------------|
| 🔐 **Wallet Connect**     | Securely connect with MetaMask or other Web3 wallets                       |
| 📝 **Proposals**          | Create proposals for budget changes, protocol upgrades, or new initiatives |
| ⚖️ **Weighted Voting**    | Voting power proportional to token holdings                                 |
| 🕒 **Real-Time Results**  | Live updates via blockchain event listeners                                 |
| 📊 **Quorum Tracking**    | Visual indicators for participation thresholds                              |
| 🗄️ **Governance History** | Immutable record of all past proposals and outcomes                         |

---

## 🧩 Tech Stack

- **Frontend**: React, Ethers.js, Tailwind CSS
- **Backend**: Solidity (Smart Contracts), Hardhat/Truffle, Node.js (optional)
- **Blockchain**: Ethereum (Testnet)
- **Tools**: MetaMask, IPFS (optional), Web3

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MetaMask wallet
- Ethereum testnet ETH (Goerli/Sepolia)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/ParamarthaRay/DAO-Voting.git
    cd DAO-Voting
    ```

2. **Install dependencies**

    - **Smart Contracts**
      ```bash
      cd contracts
      npm install
      ```

    - **Frontend**
      ```bash
      cd ../frontend
      npm install
      ```

---

### Running Locally

1. **Start local blockchain (Hardhat)**
    ```bash
    cd contracts
    npx hardhat node
    ```

2. **Deploy contracts**
    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

3. **Start frontend**
    ```bash
    cd ../frontend
    npm start
    ```

4. **Visit** [http://localhost:3000](http://localhost:5173) to interact with the dApp!

---

## 📜 Smart Contract Functions

```solidity
function createProposal(
  string memory _description,
  uint256 _voteEnd,
  uint256 _minQuorum
) external;

function vote(uint256 _proposalId, bool _support) external;
function executeProposal(uint256 _proposalId) external;
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

**How to contribute:**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---



**Happy Voting! 🚀**
