import React from "react";
import grid from "../../../images/gridView.svg";
import list from "../../../images/listView.svg";
import filters from "../../../utils/work-filters";
import Navbar from "../../../components/NavBar";
import mockData from "../../../utils/mockData";
import WorkGrid from "./WorkGrid";
import WorkList from "./WorkList";

export default function FilterBar() {
  const [filter, setFilter] = React.useState("grid");
  console.log(filter);
  return (
    <section style={{ color: "#a9a7a7" }} className="container">
      <div className="work-filter-bar ">
        <Navbar array={filters} hasForwardSlash={true} />

        <div className="list-grid">
          <img
            className="grid-icon"
            onClick={() => setFilter("grid")}
            style={{ width: "16px" }}
            src={grid}
            alt="grid"
          />

          <img
            onClick={() => setFilter("list")}
            style={{ width: "16px" }}
            src={list}
            alt="list"
          />
        </div>
      </div>
      {filter === "grid" && <WorkGrid data={mockData} />}
      {filter === "list" && <WorkList data={mockData} />}
    </section>
  );
}
