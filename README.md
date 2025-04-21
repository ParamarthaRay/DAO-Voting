# DAO Voting

Blockchain Governance Voting Interface
This project implements a comprehensive blockchain-based governance system, empowering token holders to actively participate in decentralized decision-making. The platform provides a transparent, secure, and user-friendly interface for proposal creation, voting, and governance tracking.


##Prerequisites
Node.js (version >= 16)
npm or yarn
Hardhat (installed globally or locally)
MetaMask browser extension

## 📁 Project Structure

DAO-Voting/ 
├── frontend/ # React-based user interface 
├── backend/ # Node.js/Express backend (or Hardhat/Truffle for smart contracts) 
└── README.md # Project documentation


## 🚀 Features

- Wallet connection (e.g., MetaMask)
- Submit proposals for voting
- Vote on active proposals
- Smart contract integration
- Real-time voting updates

## 🛠️ Tech Stack

- **Frontend**: React, Ethers.js
- **Backend**: Node.js, Express (or blockchain dev tools like Hardhat/Truffle)
- **Blockchain**: Solidity (Smart Contracts), Ethereum testnet
- **Tools**: MetaMask, Web3, IPFS (optional)

## 📦 Installation

### Clone the repo:
``bash
git clone https://github.com/ParamarthaRay/DAO-Voting.git
cd DAO-Voting

--Install dependencies:
Frontend:

cd frontend
npm install

Backend:

cd ../backend
npm install


🧪 Usage
Start the backend server:

cd backend
npx hardhat compile(Keep it running and open another terminal)
npx hardhat node
--Copy the token address and paste it in the web3.js file


Start the frontend dev server:
cd ../frontend
npm run dev
Visit: http://localhost:5173

📜 License
This project is licensed under the MIT License.

🙌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.
