import "./nav.css";

export default Nav = () => {
  return (
    <>
      <body>
        <header>
          <nav>
            <img src="" alt="Hello World" className="logo" />
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
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
        </header>
      </body>
    </>
  );
};
