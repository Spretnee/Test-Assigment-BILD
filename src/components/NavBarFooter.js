import React from "react";
import NavBarTabFooter from "./NavBarTabFooter";
import navLinks from "../utils/navLinks";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const { pathname } = useLocation();

  const navElement = navLinks.map((link, index) => {
    const isCurrentPage = pathname === `/${link === "home" ? "" : link}`;
    const isLastElement = navLinks.length - 1 === index;
    return (
      <NavBarTabFooter
        key={index}
        lastElement={isLastElement}
        isCurrentPage={isCurrentPage}
        tabName={link}
      />
    );
  });
  return <nav className="nav-bar-footer">{navElement}</nav>;
}
