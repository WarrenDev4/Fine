import React from "react";
import { FaUser, FaCog, FaSignOutAlt, FaChartPie, FaWallet, FaChartLine, FaBullseye, FaFileInvoiceDollar, FaChartBar } from "react-icons/fa";
import logo from "../../images/Fine Logo White.png";

{/* Sidebar */}
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Fine Logo" />
      </div>
      <nav className="sidebar-links">
      <a href="#dashboard"><FaChartPie /> Dashboard</a>
        <a href="#budget"><FaWallet /> Budget Tracking</a>
        <a href="#investments"><FaChartLine /> Investment Analysis</a>
        <a href="#goals"><FaBullseye /> Financial Forecasting</a>
        <a href="#reports"><FaFileInvoiceDollar /> Financial Reports</a>
        <a href="#analytics"><FaChartBar /> Analytics</a>
      </nav>
      <div className="sidebar-bottom">
        <a href="#profile"><FaUser /> Profile</a>
        <a href="#settings"><FaCog /> Settings</a>
        <a href="#logout"><FaSignOutAlt /> Log Out</a>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="main-content">
        <h1>Financial Dashboard</h1>
        {/* Dashboard content will be added soon! */}
        <h2>More content to be added soon.</h2>
      </main>
    </div>
  );
};

export default HomePage;
