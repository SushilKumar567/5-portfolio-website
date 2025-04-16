import React from "react";
import "./Comps.css";
import "./Media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Logo = () => {
  return (
    <div>
      <h1 className="logo">
        S<span>K.</span>
      </h1>
    </div>
  );
};

const CallTo = () => {
  return (
    <div className="call-to-btn">
      <a
        href="/5-portfolio-website/sushil-kumar-front-end-web-developer.pdf"
        className="btn"
        download="sushil-kumar-front-end-web-developer.pdf"
      >
        <FontAwesomeIcon icon={faBriefcase} className="b-icon" />
        HIRE ME
      </a>

      <a
        href="https://www.linkedin.com/in/sushilkumar567895/"
        target="blank"
        className="s-icon"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/SushilKumar567"
        target="_blank"
        className="s-icon"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export { Logo, CallTo };
