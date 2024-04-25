import React from "react";

import "./navigation.css";

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
                <a href="skills">Skills</a>
              </li>
              <li>
                <a href="battle">Battle</a>
              </li>
              <li className="dropdown-menu hamburger">
                <div className="bar"></div>
                <div className="content">
                  <a href="/settings">Settings</a>
                  <a href="/">Logout</a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </body>
    </>
  );
};

export default Nav;
