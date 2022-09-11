import React from "react";
import NavBarTab from "./NavBarTab";
import navLinks from "../utils/navLinks";

export default function Navbar() {
  const navElement = navLinks.map((link, index) => (
    <ul key={index}>
      <NavBarTab tabName={link} />
    </ul>
  ));
  return <nav className="nav-bar">{navElement}</nav>;
}
