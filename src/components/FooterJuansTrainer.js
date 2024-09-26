import React from "react";

import "./FooterJuansTrainer.css";
import logoDark from "../images/logoDark.jpeg";
import logoLight from "../images/logoLight.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function FooterJuansTrainer({ theme }) {
  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <footer className="FooterJuansTrainer">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={logo}
            alt="Juans Trainer logo (dark)"
            className="img-fluid rounded-circle footer-logo"
          />
        </div>
        <div className="col-md-4 text-center">
          <h4>Located in:</h4>
          <a
            href="https://maps.app.goo.gl/73TzVcxoha9gXb7e7"
            target="_blank"
            rel="noreferrer"
          >
            📍 Oporto, Portugal
          </a>
        </div>
        <div className="col-md-4 text-center">
          <h5>Follow me on:</h5>
          <a
            href="https://www.instagram.com/juans.trainer/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icons" />
          </a>
          <h5>Contact me on:</h5>
          <a href="mailto:jsanchezlaguna18@gmail.com">
            jsanchezlaguna18@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
