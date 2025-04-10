import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./02-About.css";
import "./03-Media.css";

const About = () => {
  const aboutSections = [
    {
      title: "Experience",
      icon: <FaBriefcase />,
      description:
        "I have experience in building and maintaining various WordPress websites, focusing on design, performance, and user experience. Additionally, I have implemented effective on-page SEO strategies to enhance visibility.",
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
      description:
        "I hold a Bachelor's degree and have recently completed a one-year certification in web development. This program has equipped me with essential skills in front-end technologies, including React.js and Tailwind CSS.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="left">
        <h2 className="title-1">ABOUT ME</h2>
        <p className="title-2">
          I'm a frontend <br /> web developer
        </p>
        <p className="title-intro1">
          I am a front-end developer skilled in React.js and Tailwind CSS,
          dedicated to building visually appealing web solutions with a strong
          focus on user experience.
        </p>
        <h2 className="gradient-text">
          Specialized in React.js and Tailwind CSS
        </h2>
      </div>

      <div className="section-container right">
        {aboutSections.map((section, index) => (
          <div key={index} className="section-item">
            <div className="icons">
              {section.icon}
              <h3 className="sub-title">{section.title}</h3>
            </div>
            <p className="section-description">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
