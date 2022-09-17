import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import Slide from "./Slide";
import { getImages } from "../../../api/images";
import CarouselLeftSvg from "../../../components/carouselIcons/CarouselLeftSvg";
import CarouselRightSvg from "../../../components/carouselIcons/CarouselRightSvg";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [imageData, setImageData] = useState(null);
  const sliderRef = useRef();

  useEffect(() => {
    getImages().then((data) => setImageData(data));
  }, []);

  const imagesElement = imageData?.map((image, index) => (
    <Slide key={index} index={index} image={image} />
  ));

  const moveRight = () => {
    sliderRef.current.slickNext();
  };
  const moveLeft = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    className: "carousel-body",
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <section className="carousel">
      <div className="carousel-title">
        <h2>a couple of our fitured projects</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          consectetur sit minus atque non temporibus, vero illum at hic amet!
        </p>
      </div>

      <Slider {...settings}>{imagesElement}</Slider>
      <div className="carousel-controls container">
        <CarouselLeftSvg moveLeft={moveLeft} />
        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <h2>dark ui kit freebie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem
            sapiente officia, nesciunt totam eaque.
          </p>
        </div>
        <CarouselRightSvg moveRight={moveRight} />
      </div>
    </section>
  );
};

export default Carousel;
