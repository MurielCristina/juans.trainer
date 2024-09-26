import React from "react";
import "./PageHome.css";

import Navbar from "../components/Navbar";
import HeroStart from "./PageHome/HeroStart";
import FooteJuansTrainer from "../components/FooterJuansTrainer";
import FooterMuri from "../components/FooterMuri";

export default function PageHome() {
  return (
    <div className="PageHome container">
      <Navbar />
      <HeroStart />
      <FooteJuansTrainer />
      <FooterMuri />
    </div>
  );
}
