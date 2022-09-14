import React from "react";
import link from "../../../images/hoverLink.svg";
import useHover from "../../../hooks/useHover";
export default function HoverLink() {
  const [hovered, ref] = useHover(false);
  const iconClass = hovered
    ? "work-image-wrapper icon-hovered-show"
    : "work-image-wrapper icon-hovered-hidden";
  console.log(hovered);
  return (
    <div className={iconClass}>
      <div>
        <img ref={ref} src={link} alt="link" />
      </div>
    </div>
  );
}
