import React from "react";
import { FaUser, FaCog, FaSignOutAlt, FaChartPie, FaWallet, FaChartLine, FaBullseye, FaFileInvoiceDollar, FaChartBar } from "react-icons/fa";
import logo from "../../images/Fine Logo White.png";
import Plot from "react-plotly.js"; 


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

        
        <div className="charts-horizontal">
          {/* Expense Categorization Chart */}
          <div className="chart-container">
            <h2>Expense Categorization</h2>
            <Plot
              data={[
                {
                  values: [30, 20, 15, 35], 
                  labels: ["Housing", "Food", "Transport", "Entertainment"],
                  type: "pie",
                  hoverinfo: "label+percent",
                  textinfo: "value",
                },
              ]}
              layout={{ width: 300, height: 250, title: "Expense Breakdown" }}
            />
          </div>

          {/* Monthly Budget Tracking Chart */}
          <div className="chart-container">
            <h2>Monthly Budget Tracking</h2>
            <Plot
              data={[
                {
                  x: ["Jan", "Feb", "Mar", "Apr", "May"],
                  y: [1000, 1500, 1200, 1800, 2000],
                  type: "bar",
                  marker: { color: "#6a0dad" },
                },
              ]}
              layout={{ width: 300, height: 250, title: "Budget vs Actual Spending" }}
            />
          </div>

          {/* Investment Growth Analysis Chart */}
          <div className="chart-container">
            <h2>Investment Growth Analysis</h2>
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4, 5], 
                  y: [100, 200, 300, 400, 500], 
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "#551a8b" }, 
                },
              ]}
              layout={{ width: 300, height: 250, title: "Portfolio Growth Over Time" }}
            />
          </div>
        </div>

        <div className="charts-horizontal">
          {/* Cash Flow Monitoring Chart */}
          <div className="chart-container">
            <h2>Cash Flow Monitoring</h2>
            <Plot
              data={[
                {
                  x: ["Jan", "Feb", "Mar", "Apr", "May"], 
                  y: [500, 700, 600, 900, 800], 
                  type: "bar",
                  name: "Income",
                  marker: { color: "#4CAF50" }, 
                },
                {
                  x: ["Jan", "Feb", "Mar", "Apr", "May"], 
                  y: [400, 500, 450, 600, 550], 
                  type: "bar",
                  name: "Expenses",
                  marker: { color: "#F44336" }, 
                },
              ]}
              layout={{ width: 300, height: 250, title: "Monthly Cash Flow", barmode: "group" }}
            />
          </div>

          {/* Goal Progress Tracking Chart */}
          <div className="chart-container">
            <h2>Goal Progress Tracking</h2>
            <Plot
              data={[
                {
                  values: [75, 25], 
                  labels: ["Completed", "Remaining"],
                  type: "pie",
                  hoverinfo: "label+percent",
                  textinfo: "value",
                  marker: { colors: ["#6a0dad", "#e0e0e0"] }, 
                },
              ]}
              layout={{ width: 300, height: 250, title: "Savings Goal Progress" }}
            />
          </div>

          {/* Risk Assessment Chart */}
          <div className="chart-container">
            <h2>Risk Assessment</h2>
            <Plot
              data={[
                {
                  x: ["Low", "Medium", "High"], 
                  y: [20, 50, 30],
                  type: "bar",
                  marker: { color: "#FFA500" }, 
                },
              ]}
              layout={{ width: 300, height: 250, title: "Portfolio Risk Levels" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;