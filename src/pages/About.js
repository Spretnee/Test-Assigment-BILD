import React from "react";
import AboutDesctipition from "../components/AboutDesctiption";
import MainTitle from "../components/MainTitle";
import Services from "../components/Services";

export default function About() {
  return (
    <main className="about-page">
      <MainTitle title={"ABOUT MY BUSINESS"} />
      <AboutDesctipition />
      <Services />
    </main>
  );
}
