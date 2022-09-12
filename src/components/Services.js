import React from "react";
import { services } from "../utils/services.js";

export default function Services() {
  console.log(services);
  const servicesElement = services.map(({ name, svg }) => (
    <div key={name} className="service">
      {svg}
      <h4 style={{ textTransform: "uppercase" }}>{name}</h4>
    </div>
  ));
  return (
    <section>
      <div className="container">
        <h3>SERVICES</h3>
      </div>
      <div className="full-width-gray">
        <div className="container services">{servicesElement}</div>
      </div>
    </section>
  );
}
