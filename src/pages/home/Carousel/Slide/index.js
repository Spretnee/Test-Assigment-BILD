import React from "react";
import "./index.css";
import ImageWraper from "../../../work/ImageWrapper";

export default function Slide(props) {
  const { image } = props;
  console.log(props);
  return (
    <div className="slide">
      <ImageWraper photo={image} />
    </div>
  );
}
