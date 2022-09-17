import React from "react";
import Header from "./Header";
import Home from "../pages/home";
import Work from "../pages/work";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Footer from "./Footer";
import Service from "../pages/about/Service";

export default function MainNavigator() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":service" element={<Service />} />
        </Route>
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
