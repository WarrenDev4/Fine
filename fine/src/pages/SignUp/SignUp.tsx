import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; 
import logo from "../../images/Fine Logo White.png";
import backgroundImage from "../../images/Fine Landing Page.png";

{/* Sign Up Page (only contains sample logic. I will add database functionality with SQLite very soon!) */}
const SignUpCard: FC = () => {
  const navigate = useNavigate(); 

  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="signup-card">
        <img src={backgroundImage} alt="Background" className="background" />
        <h2 className="signup-title">Create Account</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input type="text" id="first-name" placeholder="Enter your first name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input type="text" id="last-name" placeholder="Enter your last name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="form-input" />
          </div>
          <button type="button" className="signup-button" onClick={() => navigate("/sign-in")}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpCard;
