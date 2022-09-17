import React from "react";
import MainTitle from "../../components/MainTitle";
import Map from "./Map";
import Form from "./Form";
import "./styles.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <MainTitle title={"got a question of inquiry?"} />

      <Map />
      <Form />
    </main>
  );
}
