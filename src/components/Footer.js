import React from "react";
import HeroSectionFooter from "./HeroSectionFooter";
import NavbarFooter from "./NavBarFooter";

export default function Footer() {
  return (
    <>
      <footer>
        <HeroSectionFooter />
      </footer>
      <section className="copyright container">
        <p>COPYRIGHT DISPLAY 2013. ALL RIGHTS RESERVED</p>
        <NavbarFooter />
      </section>
    </>
  );
}
