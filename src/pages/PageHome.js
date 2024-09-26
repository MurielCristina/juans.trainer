import React from "react";
import "./PageHome.css";

import Navbar from "../components/Navbar";
import HeroStart from "./PageHome/HeroStart";
import FooterJuansTrainer from "../components/FooterJuansTrainer";
import FooterMuri from "../components/FooterMuri";

export default function PageHome() {
  return (
    <div className="PageHome container">
      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        <Navbar />
        <HeroStart />
        <FooterJuansTrainer />
        <FooterMuri />
      </div>
    </div>
  );
}
