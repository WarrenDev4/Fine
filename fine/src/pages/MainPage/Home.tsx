import {
  Pie, Bar, Line,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import logo from "../../images/Fine Logo White.png";

// Register chart elements
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
);

const HomePage = () => {
  return (
    <div className="home-container">
      <main className="main-content">
        <h1>Financial Dashboard</h1>

        <div className="charts-horizontal">
          {/* Expense Categorization */}
          <div className="chart-container">
            <h2>Expense Categorization</h2>
            <Pie
              data={{
                labels: ["Housing", "Food", "Transport", "Entertainment"],
                datasets: [{
                  data: [30, 20, 15, 35],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#AA65DA"],
                }],
              }}
              options={{ responsive: true, plugins: { title: { display: true, text: "Expense Breakdown" }}}}
            />
          </div>

          {/* Monthly Budget Tracking */}
          <div className="chart-container">
            <h2>Monthly Budget Tracking</h2>
            <Bar
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                  label: "Spending",
                  data: [1000, 1500, 1200, 1800, 2000],
                  backgroundColor: "#6a0dad",
                }],
              }}
              options={{ responsive: true, plugins: { title: { display: true, text: "Budget vs Actual Spending" }}}}
            />
          </div>

          {/* Investment Growth */}
          <div className="chart-container">
            <h2>Investment Growth Analysis</h2>
            <Line
              data={{
                labels: [1, 2, 3, 4, 5],
                datasets: [{
                  label: "Investment",
                  data: [100, 200, 300, 400, 500],
                  fill: false,
                  borderColor: "#551a8b",
                  tension: 0.3,
                }],
              }}
              options={{ responsive: true, plugins: { title: { display: true, text: "Portfolio Growth Over Time" }}}}
            />
          </div>
        </div>

        <div className="charts-horizontal">
          {/* Cash Flow Monitoring */}
          <div className="chart-container">
            <h2>Cash Flow Monitoring</h2>
            <Bar
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [
                  {
                    label: "Income",
                    data: [500, 700, 600, 900, 800],
                    backgroundColor: "#245ac7",
                  },
                  {
                    label: "Expenses",
                    data: [400, 500, 450, 600, 550],
                    backgroundColor: "#e00d2a",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: { title: { display: true, text: "Monthly Cash Flow" } },
              }}
            />
          </div>

          {/* Goal Progress Tracking */}
          <div className="chart-container">
            <h2>Goal Progress Tracking</h2>
            <Pie
              data={{
                labels: ["Completed", "Remaining"],
                datasets: [{
                  data: [75, 25],
                  backgroundColor: ["#6a0dad", "#e0e0e0"],
                }],
              }}
              options={{ responsive: true, plugins: { title: { display: true, text: "Savings Goal Progress" }}}}
            />
          </div>

          {/* Risk Assessment */}
          <div className="chart-container">
            <h2>Risk Assessment</h2>
            <Bar
              data={{
                labels: ["Low", "Medium", "High"],
                datasets: [{
                  label: "Risk Level",
                  data: [20, 50, 30],
                  backgroundColor: "#FFA500",
                }],
              }}
              options={{ responsive: true, plugins: { title: { display: true, text: "Portfolio Risk Levels" }}}}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;