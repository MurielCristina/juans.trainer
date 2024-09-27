import React from "react";

import "./FooterMuri.css";

import murilogo from "../images/murilogo.png";

export default function FooterMuri({ theme }) {
  return (
    <div className="FooterMuri">
      <hr />
      <p>
        This page was coded{" "}
        <a href="https://by-muri.netlify.app/" target="_blank" rel="noreferrer">
          by Muri <img src={murilogo} alt="Muri logo" />.
        </a>
      </p>
    </div>
  );
}
