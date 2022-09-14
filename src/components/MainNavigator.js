import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Work from "../pages/work/Work";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import Service from "./Service";

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
