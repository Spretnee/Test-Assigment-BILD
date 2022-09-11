import React from "react";
import { Link } from "react-router-dom";

export default function NavBarTab({ lastElement, tabName, isCurrentPage }) {
  console.log(lastElement);

  return (
    <>
      <Link
        className={`nav-bar-footer__tab ${isCurrentPage ? "current-page" : ""}`}
        to={tabName === "home" ? "/" : tabName}
      >
        <div className="footer-tab">
          {tabName.toUpperCase()}
          {!lastElement && <span className="slash">/</span>}
        </div>
      </Link>
    </>
  );
}
