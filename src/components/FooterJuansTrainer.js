import React from "react";
import "./FooterJuansTrainer.css";

import logoDark from "../images/logoDark.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function FooteJuansTrainer() {
  return (
    <div className=".dartk-theme FooterJuansTrainer">
      <div className="row">
        <div className="col-4">
          <img
            src={logoDark}
            alt="Juans Trainer logo (dark)"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-4">
          <h4>Located in:</h4>
          <a href="https://maps.app.goo.gl/73TzVcxoha9gXb7e7">
            📍 Oporto, Portugal
          </a>
          <h4>Follow me on:</h4>
          <FontAwesomeIcon icon={faLinkedinIn} className="footer-icons" />
          <FontAwesomeIcon icon={faInstagram} className="footer-icons" />
          <h4>Contact me on:</h4>
          <FontAwesomeIcon icon={faEnvelope} className="footer-icons" />
        </div>
        <div className="col-2">
          <h4 className="text-center">
            <small>Workout programs</small>
          </h4>
          <ul>
            <li>xxxxx</li>
            <li>xxxxx</li>
            <li>xxxxx</li>
            <li>xxxxx</li>
          </ul>
        </div>
        <div className="col-2">
          <h4 className="text-center">
            <small>More</small>
          </h4>
          <ul>
            <li>xxxxx</li>
            <li>xxxxx</li>
            <li>xxxxx</li>
            <li>xxxxx</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
