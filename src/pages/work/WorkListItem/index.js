import React from "react";
import ImageWrapper from "../ImageWrapper";
import Separator from "../../../components/Separator";
import "./styles.css";

export default function WorkListItem({ data }) {
  return (
    <>
      <div key={data.id} className="work-list__item">
        <ImageWrapper photo={data} />
        <div className="work-list-description">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <Separator />
    </>
  );
}
