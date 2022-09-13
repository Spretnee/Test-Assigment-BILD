import React from "react";
import MainTitle from "../components/MainTitle";
import Map from "../components/Map";
import Form from "../components/Form";

export default function Contact() {
  return (
    <main className="contact-page">
      <MainTitle title={"got a question of inquiry?"} />
      <Map />
      <Form />
    </main>
  );
}
