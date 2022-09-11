import React from "react";
import { Link } from "react-router-dom";
import capitalize from "../utils/capitalize";

export default function NavBarTab({ tabName }) {
  return (
    <Link to={tabName === "home" ? "/" : tabName}>{capitalize(tabName)}</Link>
  );
}
