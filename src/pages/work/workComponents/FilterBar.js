import React from "react";
import grid from "../../../images/gridView.svg";
import list from "../../../images/listView.svg";
import filters from "../../../utils/work-filters";
import Navbar from "../../../components/NavBar";
import { getImages } from "../../../api/images.js";
import WorkGrid from "./WorkGrid";
import WorkList from "./WorkList";
import Spinner from "../../../components/Spinner";
import { useQuery } from "@tanstack/react-query";

export default function FilterBar() {
  const [view, setView] = React.useState("grid");
  const [filter, setFilter] = React.useState("all");

  const { data, isLoading } = useQuery(["images", filter], () => {
    return getImages(filter);
  });

  if (isLoading) {
    return <Spinner />;
  }
  const filterElement = filters.map((flt, index) => {
    const isLastElement = index === filters.length - 1;
    const isCurrentFilter = filter === flt;

    return (
      <>
        <div
          className="filter-link"
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3
            onClick={() => {
              setFilter(flt);
            }}
            style={{ padding: "0.5em", cursor: "pointer" }}
            className={isCurrentFilter ? "current-filter" : ""}
          >
            {flt}
          </h3>
          {!isLastElement && <span>/</span>}
        </div>
      </>
    );
  });
  return (
    <section style={{ color: "#a9a7a7" }} className="container">
      <div className="work-filter-bar ">
        <div style={{ display: "flex" }}>{filterElement}</div>

        <div className="list-grid">
          <img
            className="grid-icon"
            onClick={() => setView("grid")}
            style={{ width: "16px" }}
            src={grid}
            alt="grid"
          />

          <img
            onClick={() => setView("list")}
            style={{ width: "16px" }}
            src={list}
            alt="list"
          />
        </div>
      </div>
      {view === "grid" && <WorkGrid data={data} />}
      {view === "list" && <WorkList data={data} />}
    </section>
  );
}
