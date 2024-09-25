import React from "react";

import Navbar from "../components/Navbar";
import FooterMuri from "../components/FooterMuri";

export default function PageAbout() {
  return (
    <div className="PageAbout container">
      <Navbar />
      <h1>Contenido de la página de about</h1>
      <FooterMuri />
    </div>
  );
}
