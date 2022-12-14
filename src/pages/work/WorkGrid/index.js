import React from "react";
import ImageWrapper from "../ImageWrapper";
import "./styles.css";

export default function WorkGrid({ data }) {
  const gridElement = data?.map((photo) => (
    <ImageWrapper key={photo.id} photo={photo} />
  ));

  return <section className="work-grid container">{gridElement}</section>;
}
