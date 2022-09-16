import React from "react";

const CarouselLeftSvg = ({ moveLeft }) => {
  return (
    <div
      onClick={(e) => {
        moveLeft(e);
      }}
      className="carousel-control"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="31px">
        <path
          fill-rule="evenodd"
          fill="currentColor"
          d="M15.294,-0.001 L0.001,15.500 L15.294,31.001 L20.999,25.298 L11.332,15.500 L20.999,5.702 L15.294,-0.001 Z"
        />
      </svg>
    </div>
  );
};
export default CarouselLeftSvg;
