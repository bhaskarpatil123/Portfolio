import React from "react";
import "./Skills.css";
import htmlLogo from "../../assets/skills/html.png";
import cssLogo from "../../assets/skills/css-3.png";
import jsLogo from "../../assets/skills/js.png";
import reactLogo from "../../assets/skills/react.png";
import pythonLogo from "../../assets/skills/python.png";
import sqlLogo from "../../assets/skills/sql-server.png";
import powerbiLogo from "../../assets/skills/powerbi.png";
import excelLogo from "../../assets/skills/excel.png";
import canvaLogo from "../../assets/skills/Canva.png";
const skills = [
  { name: "HTML", img: htmlLogo },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "React", img: reactLogo },
  { name: "Python", img: pythonLogo },
  { name: "SQL", img: sqlLogo },
  { name: "Excel", img: excelLogo },
  { name: "Power BI", img: powerbiLogo },
  { name: "Canva", img: canvaLogo },
];
const Skills = () => {
  return (
    <section className="skills" id="skills">
      {" "}
      <h1 className="skills-title">My Skills</h1>{" "}
      <div className="skills-grid">
        {" "}
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {" "}
            <img src={skill.img} alt={skill.name} className="skill-img" />{" "}
            <h3>{skill.name}</h3>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Skills;
