import React from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-700 to-purple-700 text-white px-6 py-5 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Top Nav Links - Centered on small screens */}
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-lg text-center">
          <li>
            <Link to="/" className="hover:text-green-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/history" className="hover:text-green-300 transition duration-300">
              Governance History
            </Link>
          </li>
        </ul>

        {/* Center Logo - Always centered */}
        <div className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 transition duration-300 text-center">
          <Link to="/">DAO Voting Dashboard</Link>
        </div>

        {/* Wallet Connect Button */}
        <div className="text-center">
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
