import React from "react";
import HoverLink from "./HoverLink";
import useHover from "../../../hooks/useHover";

function ImageWrapper({ photo }) {
  const [isHovered, ref] = useHover(false);
  const iconClass = isHovered
    ? "work-image-wrapper icon-hovered-show"
    : "work-image-wrapper icon-hovered-hidden";
  return (
    <div key={photo.id} className={iconClass}>
      <img src={photo.img} alt={photo.description} />
      <div ref={ref} className="link-hover-icon">
        <HoverLink />
      </div>
    </div>
  );
}
export default ImageWrapper;
