import React from 'react';
import './About.css';
import profile_img from '../../assets/about/Profile.jpg';
import { FaLinkedin, FaGithub, FaInstagram, FaGraduationCap, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section className="about" id="home">

      <h2 className="about-title">About Me</h2>

      <div className="about-main">

        <div className="about-content">

          <h1>
            Hello World! My Name is Bhaskar Patil
            <br />

            <span className="typed-text">
              <ReactTyped
                strings={[
                  'Data Analyst',
                  'Business Analyst',
                  'UI/UX Designer',
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </span>
          </h1>

          <p>
            Aspiring Data Analyst with hands-on experience in building
            data-driven dashboards. Skilled at blending technology with
            insights to transform raw information into impactful solutions.
            Committed to creating scalable, user-focused, and sustainable
            digital innovations.
          </p>

          <div className="about-action">

            <a
              href="https://www.linkedin.com/in/bhaskar-patil-4181b5311"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="about-icon" />
            </a>

            <a
              href="https://github.com/bhaskarpatil123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="about-icon" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="about-icon" />
            </a>

          </div>
          <div className="about-info-cards">
  <div className="info-card">

    <div className="info-icon">
      <FaGraduationCap />
    </div>

    <div className="info-content">
      <h3>Education</h3>
      <p>M.Sc Computer Science</p>
    </div>

  </div>

  <div className="info-card">

    <div className="info-icon">
      <FaBriefcase />
    </div>

    <div className="info-content">
      <h3>Experience</h3>
      <p>Data Analyst</p>
    </div>

  </div>
</div>
        </div>

        <img
          src={profile_img}
          alt="Profile"
          className="profile-img"
        />

      </div>

    </section>
  );
};

export default About;

