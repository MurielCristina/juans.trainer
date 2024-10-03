import React from "react";

import pageAboutPic1 from "./pageAboutPic1.jpg";

export default function PageAboutIntro() {
  return (
    <section className="about-intro">
      <img
        src={pageAboutPic1}
        alt="Juan Carlos Sánchez Laguna"
        className="profile-image"
      />
      <h1>I'm Juan Carlos Sánchez Laguna.</h1>
      <ul className="about-highlights">
        <li>Panamenian 🇵🇦</li>
        <li>Based in Porto 🇵🇹</li>
        <li>🗣️ Spanish, English, Portuguese</li>
        <li>🏋️‍♂️ Fitness Enthusiast</li>
        <li>👨‍🏫 Personal Trainer</li>
      </ul>
    </section>
  );
}
