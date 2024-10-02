import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="Banner">
      <h2>Ready to get in the best shape of your life?</h2>
      <Link to="/PageTrainWithMe" className="button2">
        Contact Me
      </Link>
    </section>
  );
}
