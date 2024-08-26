import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Company Logo" />
      </div>
      <div className="navbar-right">
        <FaBell size={20} />
        <div className="navbar-profile">
          <FaUserCircle size={20} />
          <span>Chris Miguel</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
