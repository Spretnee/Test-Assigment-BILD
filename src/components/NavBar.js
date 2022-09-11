import React from "react";
import NavBarTab from "./NavBarTab";
import navLinks from "../utils/navLinks";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const { pathname } = useLocation();

  const navElement = navLinks.map((link, index) => {
    const isCurrentPage = pathname === `/${link === "home" ? "" : link}`;
    return (
      <ul key={index}>
        <NavBarTab isCurrentPage={isCurrentPage} tabName={link} />
      </ul>
    );
  });
  return <nav className="nav-bar">{navElement}</nav>;
}
