import React, { useState } from "react";
import "./Project.css";

import project1 from "../../assets/Project/portfolio.png";
import project2 from "../../assets/Project/project.png";
import project3 from "../../assets/Project/project.png";
import project4 from "../../assets/Project/project.png";

import { FaGithub, FaTimes } from "react-icons/fa";


const projects = [
  {
    name: "My Protfolio",
    img: project1,
    desc: "A personal portfolio website built with React.js to showcase my skills, projects, experience, and professional profile with a clean and responsive design.",
    github: "https://github.com/bhaskarpatil123",
  },

  {
    name: "PROJECT NAME",
    img: project2,
    desc: "PROJECT DETAILS",
    github: "https://github.com/bhaskarpatil123",
  },

  {
    name: "PROJECT NAME",
    img: project3,
    desc: "PROJECT DETAILS",
    github: "https://github.com/bhaskarpatil123",
  },

  {
    name: "PROJECT NAME",
    img: project4,
    desc: "PROJECT DETAILS",
    github: "https://github.com/bhaskarpatil123",
  },
];


const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <section className="projects" id="projects">

      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            key={index}
            className="project-card"
          >

            {/* PROJECT IMAGE */}

            <div
              className="project-img-frame"
              onClick={() => setSelectedProject(project)}
            >

              <img
                src={project.img}
                alt={project.name}
                className="project-img"
              />

            </div>


            {/* PROJECT FOOTER */}

            <div className="project-footer">

              <h2 className="project-title">
                {project.name}
              </h2>


              {/* GITHUB ICON */}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          PROJECT POPUP
          ========================= */}

      {selectedProject && (

        <div
          className="popup-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>


            {/* PROJECT IMAGE */}

            <img
              src={selectedProject.img}
              alt={selectedProject.name}
              className="popup-image"
            />


            {/* PROJECT NAME */}

            <h2 className="popup-title">
              {selectedProject.name}
            </h2>


            {/* PROJECT DESCRIPTION */}

            <p className="popup-desc">
              {selectedProject.desc}
            </p>


            {/* POPUP GITHUB */}

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-github"
            >
              <FaGithub />
            </a>

          </div>

        </div>

      )}

    </section>
  );
};


export default Projects;