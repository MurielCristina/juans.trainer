import React from "react";

import Navbar from "../components/Navbar";
import SectionFooteJuansTrainer from "../SectionFooterJuansTrainer";
import SectionFooterMuri from "../SectionFooterMuri";

export default function PageHome() {
  return (
    <div className="PageHome container">
      <Navbar />
      <h1>Contenido de la página de home</h1>
      <SectionFooteJuansTrainer />
      <SectionFooterMuri />
    </div>
  );
}
