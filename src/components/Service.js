import React from "react";
import { useParams } from "react-router-dom";
import { getService } from "../utils/services";
const Service = () => {
  const { service } = useParams();
  const { text, name } = getService(service);

  return (
    <section className="container">
      <div className={name}>{text}</div>
    </section>
  );
};
export default Service;
