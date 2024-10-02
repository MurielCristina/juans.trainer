import React from "react";
import "./PageHome.css";

import HeroStart from "./PageHome/HeroStart";

export default function PageHome({ theme, toggleTheme }) {
  return (
    <div className="PageHome">
      <HeroStart />
    </div>
  );
}
