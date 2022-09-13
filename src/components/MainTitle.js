import React from "react";

export default function MainTitle({ title }) {
  return (
    <div className="full-width-green">
      <div className="container main-title">
        <h1 style={{ textDecoration: "uppercase", letterSpacing: "1px" }}>
          {title}
        </h1>
      </div>
    </div>
  );
}
