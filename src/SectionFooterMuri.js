import React from "react";

import "./SectionFooterMuri.css";

import murilogo from "./images/murilogo.png";

export default function SectionFooterMuri() {
  return (
    <div className="SectionFooterMuri">
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
