import React from "react";
import "./02-Projects.css";
import "./03-Media.css";
import calculatorApp from "../../assets/2-calculator-app.png";
import todolistApp from "../../assets/3-to-do-list-app.png";
import weatherApp from "../../assets/4-weather-app.png";

const Projects = () => {
  const projects = [
    {
      title: "Calculator App",
      description:
        "A user-friendly calculator app designed for basic arithmetic operations, including addition, subtraction, multiplication, division, and modulus. It offers a clean design with smooth error handling to deliver a seamless user experience.",
      technologies: ["HTML", "CSS", "JS", "and React"],
      link: "https://sushilkumar567.github.io/6-calculator-app/",
      image: calculatorApp,
    },
    {
      title: "To-Do List App",
      description:
        "This To-do App provides an efficient solution for task management, allowing users to add, delete, and mark tasks as complete. With a clean, intuitive interface and effective error handling, it ensures a seamless and user-friendly experience.",
      technologies: ["HTML", "CSS", "JS", "and React"],
      link: "https://sushilkumar567.github.io/7-todo-list-app/",
      image: todolistApp,
    },
    {
      title: "Weather App",
      description:
        "This weather app provides real-time weather updates, including temperature, humidity, and wind speed for any city. It features dynamic weather icons and a responsive design for an optimal user experience.",
      technologies: ["HTML", "CSS", "JS", "and React"],
      link: "https://sushilkumar567.github.io/8-weather-app/",
      image: weatherApp,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="top">
        <h1 className="title-1">MY PROJECTS</h1>
        <h1 className="title-2">Dynamic projects for engaging web solutions</h1>
        <p className="title-intro1 title-intro2" id="sml-text">
          A curated collection of personal projects that demonstrates my
          development skills, creativity, and commitment to delivering
          high-quality web solutions.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <img
                src={project.image}
                className="project-image"
                alt={project.title}
              />
              <div className="project-description">
                <h3 className="project-title">{project.title}</h3>
                <p className="title-intro1" id="sml-text">
                  {project.description}
                </p>
                <p>
                  <h4 className="technologies">Technologies</h4>
                  {project.technologies.join(", ")}
                </p>
                <a href={project.link} className="btn" target="_blank">
                  VIEW PROJECT
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
