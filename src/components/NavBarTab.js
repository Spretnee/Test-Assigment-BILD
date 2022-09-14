import React from "react";
import { Link } from "react-router-dom";

export default function NavBarTab({
  tabName,
  isCurrentPage,
  hasForwardSlash,
  currentLink,
}) {
  return (
    <Link
      className={
        !hasForwardSlash
          ? `nav-bar__tab ${isCurrentPage ? "current-page" : ""}`
          : `nav-bar-default__tab ${isCurrentPage ? "current-page" : ""}`
      }
      to={tabName === "home" ? "/" : tabName}
    >
      {tabName.toUpperCase()}
    </Link>
  );
}
