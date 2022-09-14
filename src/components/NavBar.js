import React from "react";
import NavBarTab from "./NavBarTab";
import { useLocation } from "react-router-dom";
export default function Navbar({ array, hasForwardSlash = false }) {
  const { pathname } = useLocation();

  const navElement = array?.map((link, index) => {
    const currentLink = `/${link === array[0] ? "" : link}`;
    const isCurrentPage = pathname === currentLink;
    const isLastElement = array.length - 1 === index;

    return (
      <ul
        className={!hasForwardSlash ? "nav-bar-ul" : "nav-bar-default-ul"}
        key={index}
      >
        <NavBarTab
          isCurrentPage={isCurrentPage}
          tabName={link}
          hasForwardSlash={hasForwardSlash}
          currentLink={currentLink}
        />
        {!isLastElement && hasForwardSlash && (
          <span style={{ margin: " 0 10px 0 10px" }} className="slash">
            /
          </span>
        )}
      </ul>
    );
  });
  return (
    <nav className={!hasForwardSlash ? "nav-bar" : "nav-bar-default"}>
      {navElement}
    </nav>
  );
}
