import React from "react";
import "./carousel.css";
import CarouselBody from "../Carousel/CarouselBody";

const Carousel = () => {
  return (
    <section className="carousel">
      <h2>a couple of our fitured projects</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        consectetur sit minus atque non temporibus, vero illum at hic amet!
      </p>
      <CarouselBody />
      <h2>dark ui kit freebie</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem
        sapiente officia, nesciunt totam eaque.
      </p>
    </section>
  );
};

export default Carousel;
