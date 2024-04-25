import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./nav.css";

const Nav = () => {
  return (
    <>
      <body>
        <header>
          <nav>
            {/* <img src="" alt="Hello World" className="logo" /> */}
            <p>Demo</p>
            <ul>
              <li>
                <a href="login">Login</a>
              </li>
              <li>
                <a href="signUp">Sign up</a>
              </li>
              <li className="search">
                <a href="skills">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
              {/* <li className="dropdown-menu hamburger">
                <div className="bar"></div>
                <div className="content">
                  <a href="/settings">Settings</a>
                  <a href="/">Logout</a>
                </div>
              </li> */}
            </ul>
          </nav>
        </header>
      </body>
    </>
  );
};

export default Nav;
