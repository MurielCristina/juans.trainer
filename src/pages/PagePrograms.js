import React from "react";
import "./PagePrograms.css";

import PageProgramsOption from "./PageProgram/PageProgramsOption";
import { Link } from "react-router-dom";

export default function PagePrograms() {
  let programs = [
    {
      id: 1,
      title: "Online Training",
      description: "Train remotely with personalized plans.",
      content1: "Evaluación inicial (questionario y llamada)",
      content2: "Guía nutricional",
      content3: "Daily coach support",
      content4: "Entrenamiento personalizado",
      content5: "Video llamada mensual",
    },
    {
      id: 2,
      title: "Personal Training",
      description: "One-on-one training sessions.",
      content1: "Evaluación inicial (questionario y llamada)",
      content2: "Guía nutricional",
      content3: "Daily coach support",
      content4: "Entrenamiento personalizado",
      content5: "Video llamada mensual",
    },
    {
      id: 3,
      title: "Hybrid Training",
      description: "Combination of online and personal training.",
      content1: "Evaluación inicial (questionario y llamada)",
      content2: "Guía nutricional",
      content3: "Daily coach support",
      content4: "Entrenamiento personalizado",
      content5: "Video llamada mensual",
    },
  ];

  return (
    <div className="PagePrograms content-wrapper">
      <h1>My programs</h1>
      <div className="programs-grid">
        {programs.map((program) => (
          <PageProgramsOption key={program.id} program={program} />
        ))}
      </div>
      <Link to="/PageTrainWithMe" className="button2">
        Join Today!
      </Link>
    </div>
  );
}
