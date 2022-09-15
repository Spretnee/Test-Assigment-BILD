import React from "react";
import "./home.css";
import Carousel from "./homeComponents/carousel/Carousel";
import HeroPoster from "./homeComponents/heroPoster/HeroPoster";
import IntroductionVideo from "./homeComponents/introductionVideo/IntroductionVideo";

export default function Home() {
  return (
    <main className="home">
      <HeroPoster />
      <IntroductionVideo />
      <Carousel />
    </main>
  );
}
