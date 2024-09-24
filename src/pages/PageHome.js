import React from "react";

import Navbar from "../components/Navbar";

import SectionFooterMuri from "../SectionFooterMuri";

export default function PageHome() {
  return (
    <div className="PageHome">
      <Navbar />
      <h1>Contenido de la página de home</h1>
      <SectionFooterMuri />
    </div>
  );
}
