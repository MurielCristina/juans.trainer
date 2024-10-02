import React from "react";
import "./PageHome.css";

import HeroStart from "./PageHome/HeroStart";
import HowCanIHelp from "./PageHome/HowCanIHelp";
import HaveQuestions from "./PageHome/HaveQuestions";

export default function PageHome({ theme, toggleTheme }) {
  return (
    <div className="PageHome">
      <HeroStart />
      <HowCanIHelp />
      <HaveQuestions />
    </div>
  );
}
