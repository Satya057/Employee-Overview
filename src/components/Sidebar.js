import React from 'react';
import { FaHome, FaUserTie, FaMoneyBill, FaCog } from 'react-icons/fa';
import '../Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon"><FaHome size={30} color="#fff" /></div>
      <div className="sidebar-icon"><FaUserTie size={30} color="#fff" /></div>
      <div className="sidebar-icon"><FaMoneyBill size={30} color="#fff" /></div>
      <div className="sidebar-icon"><FaCog size={30} color="#fff" /></div>
    </div>
  );
};

export default Sidebar;
