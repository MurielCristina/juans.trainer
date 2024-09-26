import React, { useState } from "react";
import "./App.css";

import PageHome from "./pages/PageHome";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <PageHome theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
