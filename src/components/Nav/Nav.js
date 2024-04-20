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
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li className="search">
                <a href="#">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
              <li className="hamburger">
                <a href="#">
                  <div className="bar"></div>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </body>
    </>
  );
};

export default Nav;
