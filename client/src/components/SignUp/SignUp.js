import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import Nav from "../Nav/Nav";

const signUpPage = () => {
  return (
    <>
      <Nav />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter a username" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter a password" />
        </div>
        <Link to="/skills" className="signup-button">
          Sign Up
        </Link>
        <div className="login-redirect">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default signUpPage;
