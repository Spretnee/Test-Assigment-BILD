import React from "react";

const CarouselRightSvg = ({ moveRight }) => {
  return (
    <div
      onClick={(e) => {
        moveRight(e);
      }}
      className="carousel-control"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="31px">
        <path
          fill-rule="evenodd"
          fill="currentColor"
          d="M5.706,31.001 L20.999,15.500 L5.706,-0.001 L0.001,5.702 L9.668,15.500 L0.001,25.298 L5.706,31.001 Z"
        />
      </svg>
    </div>
  );
};
export default CarouselRightSvg;
