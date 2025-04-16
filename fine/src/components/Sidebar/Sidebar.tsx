import "./Sidebar.css";
import logo from "../../images/Fine Logo White.png";
import { Link } from "react-router-dom";

import {
    FaUser, FaCog, FaSignOutAlt, FaChartPie, FaWallet, FaChartLine,
    FaBullseye, FaFileInvoiceDollar, FaChartBar
  } from "react-icons/fa";


const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Fine Logo" />
        </div>
        <nav className="sidebar-links">
          <Link to="/main-page"><FaChartPie /> Dashboard</Link>
          <Link to="/budget-tracking"><FaWallet /> Budget Tracking</Link>
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

export default Sidebar;