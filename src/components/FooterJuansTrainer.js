import React from "react";
import "./FooterJuansTrainer.css";

import logoDark from "../images/logoDark.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <h4>📍 Oporto, Portugal</h4>
          <h4>Follow me on:</h4>
          <FontAwesomeIcon icon={faPenNib} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="col-4">xxx</div>
      </div>
      <div></div>
    </div>
  );
}
