import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Create this CSS file for styling
import logo from "../../images/Fine Logo White.png"; // Adjust the path to your logo

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Background Image */}
      <div className="background"></div>

      {/* Content Container */}
      <div className="landing-content">
        {/* Logo */}
        <img src={logo} alt="Logo" className="landing-logo" />

        {/* Heading and Description */}
        <h1 className="landing-title">Welcome to Fine</h1>
        <p className="landing-description">
          A financial management analysis system designed to optimize financial performance.
        </p>

        {/* Call-to-Action Button */}
        <button
          className="landing-button"
          onClick={() => navigate("/sign-up")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;