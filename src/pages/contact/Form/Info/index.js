import React from "react";
export default function Info() {
  return (
    <aside className="aside-contact">
      <section className="contact-info">
        <h2>contact info</h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo
          exercitationem error .
        </p>

        <div className="email-info">
          <p>
            <strong>email:</strong>
            <span style={{ color: "#2ecc71" }}> info@display.com</span>
          </p>
          <p>
            <strong>phone:</strong> <span> 555-588493-334-33</span>
          </p>
        </div>
        <p>Marka Markovica 650,Tolosi,Podgorica,Montenegro</p>
      </section>
      <section className="contact-hours">
        <h2 className="contact-hours__title title">store hours</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="contact-hours__day day">Monday to Thursday</p>
          <p className="contact-hours__hours hours">8 am - 5 pm</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="contact-hours__day day">Friday</p>
          <p className="contact-hours__hours hours">8 am - 6 pm</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="contact-hours__day day">Saturday</p>
          <p className="contact-hours__hours hours">9 am - 5 pm</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="contact-hours__day day">{`Sunday & Holidays`}</p>
          <p className="contact-hours__hours hours">Closed</p>
        </div>
      </section>
    </aside>
  );
}
