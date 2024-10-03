import React from "react";
import "./PageTrainWithMe.css";

import pageAboutPic2 from "../images/pageAboutPic2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function PageTrainWithMe() {
  return (
    <div className="PageTrainWithMe content-wrapper">
      <section className="contact-hero">
        <img
          src={pageAboutPic2}
          alt="contact background"
          className="contact-image"
        />
        <div className="overlay"></div>
        <div className="contact-content">
          <h1>Contact me</h1>
          <p>Ready to start your fitness journey? Get in touch!</p>
        </div>
      </section>
      <section className="contact-methods">
        <div className="contact-item">
          <a href="mailto:jsanchezlaguna18@gmail.com" className="contact-link">
            ✉️ Email Me at: jsanchezlaguna18@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://www.instagram.com/juans.trainer/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faInstagram} /> Follow me on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
