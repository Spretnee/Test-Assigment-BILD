import React from "react";
import { services } from "../../../utils/services.js";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

export default function Services() {
  const servicesElement = services.map(({ name, svg }) => (
    <Link key={name} to={name}>
      <div className="service">
        {svg}
        <h4 style={{ textTransform: "uppercase" }}>{name}</h4>
      </div>
    </Link>
  ));
  return (
    <section className="services-container">
      <div className="container">
        <h3>SERVICES</h3>
      </div>
      <div className="full-width-gray">
        <div className="container services">{servicesElement}</div>
      </div>
      <Outlet />
    </section>
  );
}
