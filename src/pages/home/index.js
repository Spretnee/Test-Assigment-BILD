import React from "react";
import "./home.css";
import Carousel from "./Carousel/Carousel";
import HeroPoster from "./homeComponents/heroPoster/HeroPoster";
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
