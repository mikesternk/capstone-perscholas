import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Nav from "../Nav/Nav";

const loginPage = () => {
  return (
    <>
      <Nav />
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <Link to="/skills" className="login-button">
          Login
        </Link>
        <div className="sign-up-redirect">
          <p>Don't have an account?</p>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default loginPage;
