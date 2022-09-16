import React from "react";
import "./home.css";
import Carousel from "./Carousel";
import HeroPoster from "./HeroPoster/HeroPoster";
import IntroductionVideo from "./introductionVideo/IntroductionVideo";

export default function Home() {
  return (
    <main>
      <HeroPoster />
      <IntroductionVideo />
      <Carousel />
    </main>
  );
}
