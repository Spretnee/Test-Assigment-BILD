import React from "react";
import WorkImageList from "./WorkListItem";

export default function WorkList({ data }) {
  const listElement = data?.map((photo) => {
    return (
      <div key={photo.id}>
        <WorkImageList data={photo} />
      </div>
    );
  });
  return <section className="work-list container">{listElement}</section>;
}
