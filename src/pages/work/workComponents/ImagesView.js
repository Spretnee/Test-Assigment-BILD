import React, { useRef } from "react";
import grid from "../../../images/gridView.svg";
import list from "../../../images/listView.svg";
import filters from "../../../utils/work-filters";

import { getImages } from "../../../api/images.js";
import WorkGrid from "./WorkGrid";
import WorkList from "./WorkList";
import Spinner from "../../../components/Spinner";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

export default function FilterBar() {
  const [view, setView] = React.useState("grid");
  const [filter, setFilter] = React.useState("all");
  const wat = useRef();

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      ["images", filter],
      ({ pageParam = 1 }) => {
        return getImages(filter, pageParam);
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.length < 20) {
            return 0;
          }
          const nextPage = allPages.length + 1;
          return nextPage;
        },
      }
    );

  const handleScroll = (e) => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }
    const { scrollHeight, scrollTop, clientHeight } = wat.current;

    if (scrollHeight - scrollTop <= clientHeight * 1.2) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  const preppedData = data.pages.flatMap((page) => page);

  const filterElement = filters.map((flt, index) => {
    const isLastElement = index === filters.length - 1;
    const isCurrentFilter = filter === flt;

    return (
      <div
        key={index}
        className={`filter-link filter-link-${flt}`}
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
        {!isLastElement && <span className="forward-slash">/</span>}
      </div>
    );
  });

  return (
    <section
      ref={wat}
      onScroll={handleScroll}
      style={{ color: "#a9a7a7" }}
      className="image-view-container"
    >
      <div className="work-filter-bar ">
        <div className="work-filters">{filterElement}</div>

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
      {view === "grid" && <WorkGrid data={preppedData} />}
      {view === "list" && <WorkList data={preppedData} />}
    </section>
  );
}
