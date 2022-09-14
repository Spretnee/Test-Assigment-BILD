import React from "react";
import MainTitle from "../../components/MainTitle";
import FilterBar from "./workComponents/FilterBar";

export default function Work() {
  return (
    <main>
      <MainTitle title={"CHECK OUT WHAT I CAN DO"} />
      <FilterBar />
      <h1>Work Page Content</h1>;
    </main>
  );
}
