import React from "react";

import Navbar from "../components/Navbar";
import FooteJuansTrainer from "../components/FooterJuansTrainer";
import FooterMuri from "../components/FooterMuri";

export default function PageHome() {
  return (
    <div className="PageHome container">
      <Navbar />
      <h1>Contenido de la página de home</h1>
      <FooteJuansTrainer />
      <FooterMuri />
    </div>
  );
}
