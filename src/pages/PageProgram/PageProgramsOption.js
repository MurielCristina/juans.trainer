import React, { useState } from "react";

export default function PageProgramsOption({ program }) {
  const [isOpen, setIsOpen] = useState(false);

  let toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="program-option">
      <div className="program-header" onClick={toggleContent}>
        <h2>{program.title}</h2>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div className={`program-content ${isOpen ? "open" : ""}`}>
        <p>{program.description}</p>
        <ul>
          <li>{program.content1}</li>
          <li>{program.content2}</li>
          <li>{program.content3}</li>
          <li>{program.content4}</li>
          <li>{program.content5}</li>
        </ul>
      </div>
    </div>
  );
}
