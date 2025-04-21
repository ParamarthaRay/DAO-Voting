import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
        if (onConnect) onConnect(accounts[0]);
      } catch (error) {
        console.error("Wallet connection error:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          if (onConnect) onConnect(accounts[0]);
        }
      }
    };

    checkIfWalletIsConnected();
  }, [onConnect]);

  return (
    <div className="flex flex-col items-center">
      {walletAddress ? (
        <p className="text-green-200 font-medium mt-2">
          Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-green-900 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-all shadow-md font-semibold text-lg"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
