import React from "react";

import "./FooterJuansTrainer.css";

import logoDark from "../images/logoDark.jpeg";
import logoLight from "../images/logoLight.jpeg";

export default function FooteJuansTrainer() {
  return (
    <div className="FooteJuansTrainer">
      Juans Trainer Footer
      <div>
        <img src={logoDark} alt="Juans Trainer logo (dark)" />
        <img src={logoLight} alt="Muri logo" />
      </div>
    </div>
  );
}
