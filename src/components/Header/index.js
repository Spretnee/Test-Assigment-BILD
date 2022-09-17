import React, { memo } from "react";
import Navbar from "../NavBar";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLink";
import Separator from "../Separator";
import navLinks from "../../utils/navLinks";
import "./styles.css";

export default memo(function Header() {
  return (
    <header className="container">
      <Logo />
      <SocialMediaLinks />
      <Separator />
      <Navbar array={navLinks} />
    </header>
  );
});
