import React from "react";
import "./PageHome.css";

import Navbar from "../components/Navbar";
import HeroStart from "./PageHome/HeroStart";
import FooterJuansTrainer from "../components/FooterJuansTrainer";
import FooterMuri from "../components/FooterMuri";

export default function PageHome({ theme, toggleTheme }) {
  return (
    <div className="PageHome container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroStart />
      <FooterJuansTrainer theme={theme} />
      <FooterMuri />
    </div>
  );
}
