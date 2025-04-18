import React from "react";
import "./02-Skills.css";
import "./03-Media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3,
  faBootstrap,
  faJs,
  faReact,
  faGithub,
  faWordpress,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

import { faFileCode } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Tailwind", icon: faFileCode },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "GitHub", icon: faGithub },
    { name: "WordPress", icon: faWordpress },
    { name: "SEO", icon: faSearchengin },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-left ">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="skills-right">
        <h1 className="title-1">MY SKILLS</h1>
        <h2 className="title-2">
          Skills for responsive <br /> & engaging web solutions
        </h2>
        <p className="title-intro1 title-intro2" id="sml-text">
          Equipped with a versatile skill set, I bring together design and
          development to craft efficient, responsive, and visually appealing web
          solutions.
        </p>

        <h2 className="gradient-text">
          Versatile skills as per industry demand
        </h2>
      </div>
    </section>
  );
};

export default Skills;
