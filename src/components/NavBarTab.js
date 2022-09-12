import React from "react";
import { Link } from "react-router-dom";
import capitalize from "../utils/capitalize";

export default function NavBarTab({ tabName, isCurrentPage }) {
  return (
    <Link
      className={`nav-bar__tab ${isCurrentPage ? "current-page" : ""}`}
      to={tabName === "home" ? "/" : tabName}
    >
      <>{capitalize(tabName)}</>
    </Link>
  );
}
