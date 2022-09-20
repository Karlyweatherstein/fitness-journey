import React from "react";
import HeroPic from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <div className="hero">
      <h1>fitness </h1>
      <img src={HeroPic} alt="Katie Bevington"></img>
      <div className="meetKatie">
        <h2>Meet Katie</h2>
        <p>Brand influencer. Crunchy mom or whateva</p>
      </div>
    </div>
  );
}

export default Hero;
