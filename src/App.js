import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Styles.css";

import Navbar from "./components/Navbar";
import FooterJuansTrainer from "./components/FooterJuansTrainer";
import FooterMuri from "./components/FooterMuri";

import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PagePrograms from "./pages/PagePrograms";
import PageTrainWithMe from "./pages/PageTrainWithMe";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={<PageHome theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/PageHome"
            element={<PageHome theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/PageAbout"
            element={<PageAbout theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/PagePrograms"
            element={<PagePrograms theme={theme} />}
          />
          <Route
            path="/PageTrainWithMe"
            element={<PageTrainWithMe theme={theme} />}
          />
        </Routes>
      </div>
      <FooterJuansTrainer theme={theme} />
      <FooterMuri theme={theme} />
    </Router>
  );
}
