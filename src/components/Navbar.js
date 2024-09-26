import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logoLight from "../images/logoLight.jpeg";
import logoDark from "../images/logoDark.jpeg";

export default function Navbar({ theme, toggleTheme }) {
  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to={"/PageHome"}>
            <img src={logo} alt="Juans Trainer logo" />
          </Link>
        </div>

        <ul className="navbar-links">
          <li>
            <Link to="/PageHome">HOME</Link>
          </li>
          <li>
            <Link to="/PageAbout">ABOUT</Link>
          </li>
          <li>
            <Link to="/PagePrograms">PROGRAMS</Link>
          </li>
          <li>
            <Link to="/PageTrainWithMe">TRAIN WITH ME</Link>
          </li>
        </ul>

        <div className="navbar-theme-toggle">
          <button onClick={toggleTheme}>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
