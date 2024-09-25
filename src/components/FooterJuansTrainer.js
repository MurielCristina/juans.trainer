import React from "react";

import "./FooterJuansTrainer.css";
import logoDark from "../images/logoDark.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function FooteJuansTrainer() {
  return (
    <div className=" FooterJuansTrainer">
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
          <a
            href="https://maps.app.goo.gl/73TzVcxoha9gXb7e7"
            target="_blank"
            rel="noreferrer"
          >
            📍 Oporto, Portugal
          </a>
        </div>
        <div className="col-4">
          <h5>Follow me on:</h5>
          <a
            href="https://www.ºinstagram.com/juans.trainer/"
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
      <div></div>
    </div>
  );
}
