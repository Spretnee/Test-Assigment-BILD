import React from "react";
import AboutDesctipition from "./AboutDesctipition";
import MainTitle from "../../components/MainTitle";
import Services from "./Services";
import "./styles.css";

export default function About() {
  return (
    <main className="about-page">
      <MainTitle title={"ABOUT MY BUSINESS"} />
      <AboutDesctipition />
      <Services />
    </main>
  );
}
