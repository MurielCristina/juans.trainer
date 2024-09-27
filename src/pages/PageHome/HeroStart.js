import React from "react";

import { Link } from "react-router-dom";

export default function HeroStart() {
  return (
    <section className="HeroStart">
      <div className="hero-content">
        <h1>JUANS TRAINER</h1>
        <h3>Personal Trainer in Oporto, Portugal</h3>
        <p>
          Empowering you to achieve your fitness goals with personalized
          training and dedicated support.
        </p>
        <Link to="/PageTrainWithMe" className="hero-button btn">
          Get Started
        </Link>
      </div>
    </section>
  );
}
