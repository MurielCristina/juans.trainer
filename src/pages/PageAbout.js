import React from "react";
import "./PageAbout.css";

import Banner from "./PageHome/Banner";
import PageAboutIntro from "./PageAbout/PageAboutIntro";
import PageAboutBio from "./PageAbout/PageAboutBio";

export default function PageAbout() {
  return (
    <div className="PageAbout content-wrapper">
      <PageAboutIntro />
      <PageAboutBio />
      <Banner />
    </div>
  );
}
