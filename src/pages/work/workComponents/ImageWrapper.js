import React from "react";
// import HoverLink from "./HoverLink";

function ImageWrapper({ photo }) {
  return (
    <div key={photo.id} className="work-image-wrapper">
      <img src={photo.img} alt={photo.description} />
      <div className="link-hover-icon">{/* <HoverLink /> */}</div>
    </div>
  );
}
export default ImageWrapper;
