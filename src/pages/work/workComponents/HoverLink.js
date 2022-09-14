import React from "react";
import link from "../workComponents/hoverLink.svg";
export default function HoverLink() {
  return (
    <div className="hover-link">
      <div>
        <img src={link} alt="link" />
      </div>
    </div>
  );
}
