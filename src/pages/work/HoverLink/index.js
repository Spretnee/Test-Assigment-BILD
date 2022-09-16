import React from "react";
import link from "../../../images/hoverLink.svg";
import "./styles.css";

export default function HoverLink() {
  return (
    <div className="hover-link">
      <div>
        <img src={link} alt="link" />
      </div>
    </div>
  );
}
