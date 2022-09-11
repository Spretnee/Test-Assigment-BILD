import React from "react";
import Navbar from "./NavBar";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLink";
import Separator from "./Separator";

export default function Header() {
  return (
    <header className="container">
      <Logo />
      <SocialMediaLinks />
      <Separator />
      <Navbar />
    </header>
  );
}
