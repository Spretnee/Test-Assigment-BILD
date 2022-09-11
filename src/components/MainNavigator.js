import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Page from "../pages/Page";
import Work from "../pages/Work";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function MainNavigator() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path="about"
          element={
            <Page>
              <About />
            </Page>
          }
        />
        <Route
          path="work"
          element={
            <Page>
              <Work />
            </Page>
          }
        />
        <Route
          path="contact"
          element={
            <Page>
              <Contact />
            </Page>
          }
        />
      </Routes>
    </>
  );
}
