import React from "react";
import HeroSectionFooter from "./HeroSectioFooter";
import Navbar from "../NavBar";
import navLinks from "../../utils/navLinks";
import "./styles.css";
export default function Footer() {
  return (
    <>
      <footer>
        <HeroSectionFooter />
      </footer>
      <section style={{ fontSize: "0.9rem" }} className="copyright container">
        <p>COPYRIGHT DISPLAY 2013. ALL RIGHTS RESERVED</p>

        <Navbar array={navLinks} hasForwardSlash={true} />
      </section>
    </>
  );
}
