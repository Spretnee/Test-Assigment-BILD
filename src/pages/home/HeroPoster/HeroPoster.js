import React from "react";
import "./heroPoster.css";
import macbook from "../../../../images/macbook pro.png";
import iPhone from "../../../../images/iPhone.png";
import iPad from "../../../../images/iPad.png";
import Button from "../../../../components/Button";

const HeroPoster = () => {
  return (
    <>
      <section className="hero-poster">
        <div className="devices-container">
          <div className="hero-poster-macbook">
            <img src={macbook} alt="macbook" />
          </div>
          <div className="hero-poster-iphone">
            <img src={iPhone} alt="iphone" />
          </div>
          <div className="hero-poster-ipad">
            <img src={iPad} alt="ipad" />
          </div>
        </div>
        <div className="hero-poster-cta ">
          <div className=" container cta-flex ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              nam amet eos aspernatur, sequi vitae possimus doloremque doloribus
              nesciunt officiis quos fugiat.
            </p>
            <Button text="browse portofolio" />
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroPoster;
