import React from "react";
import "./02-Hero.css";
import "./03-Media.css";
import Photo from "../../assets/photo.jpg";
import { CallTo } from "../00-Comps/Comps";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>HI, I'M SUSHIL</h1>
        <h2>
          A Passionate&nbsp;
          <br />
          <span>Web developer</span>
        </h2>
        <p className="para">
          I am a front-end web developer with experience in creating visually
          appealing and user-friendly web solutions that effectively drive
          business results.
        </p>
        <CallTo />
      </div>

      <div className="hero-right">
        <img src={Photo} />
        <h2>
          <span>Welcome! </span>
          <br />
          Let’s build something amazing together.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
