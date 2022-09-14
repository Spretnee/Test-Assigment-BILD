import React from "react";
import grid from "../../../images/gridView.svg";
import list from "../../../images/listView.svg";
import filters from "../../../utils/work-filters";
import Navbar from "../../../components/NavBar";

export default function FilterBar() {
  return (
    <section className="work-filter-bar container">
      <div style={{ alignSelf: "center" }}>
        <Navbar array={filters} />
      </div>

      <div className="list-grid">
        <img style={{ width: "16px" }} src={grid} alt="grid" />

        <img style={{ width: "16px" }} src={list} alt="list" />
      </div>
    </section>
  );
}
