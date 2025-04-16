// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import MainPage from "./pages/MainPage/Home";
import BudgetTracking from "./pages/MainPage/BudgetTracking";
import SidebarLayout from "./layout/SidebarLayout"; 
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/main-page" element={
              <SidebarLayout>
                <MainPage />
              </SidebarLayout>
            }
          />
          <Route path="/budget-tracking" element={
              <SidebarLayout>
                <BudgetTracking />
              </SidebarLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
