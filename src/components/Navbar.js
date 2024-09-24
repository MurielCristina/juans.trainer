import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to={"/PageHome"}>HOME</Link>
        </li>
        <li>
          <Link to={"/PageAbout"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/PagePrograms"}>PROGRAMS</Link>
        </li>
        <li>
          <Link to={"/PageTrainWithMe"}>TRAIN WITH ME</Link>
        </li>
      </ul>
    </div>
  );
}
