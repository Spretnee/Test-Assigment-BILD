import React from "react";
import Footer from "../components/Footer";

export default function Page({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
