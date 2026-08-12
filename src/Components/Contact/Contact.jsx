import React from "react";
import "./Contact.css";
import { FaArrowRight, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const email = "1480bhaskarpatil@gmail.com";

  return (
    <section className="contact-section" id="contact">

      <div className="contact-title">
        <h1>Contact</h1>
        <div className="contact-title-line"></div>
      </div>


      <div className="contact-container">

      
        <div className="contact-heading">
          <h2>
            Let's build something
            <br />
            amazing <span>together.</span>
          </h2>
        </div>

        <div className="contact-content">

          <p>
            Have a project or an opportunity in mind? 
            <br/>
             Feel free to connect!
          </p>

          <a
            href={`mailto:${email}`}
            className="contact-button"
          >
            Get in touch
            <FaArrowRight />
          </a>

        </div>


        <div className="contact-decoration">

          <svg
            className="rocket-path"
            viewBox="0 0 400 150"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 5 115
                C 60 115, 70 95, 100 85
                C 125 75, 105 40, 125 30
                C 145 20, 165 55, 145 70
                C 125 85, 145 105, 185 105
                C 230 105, 240 90, 270 85
                C 315 80, 335 95, 355 75
              "
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.3"
              strokeDasharray="4 4"
            />
          </svg>

          <FaPaperPlane className="paper-plane" />

        </div>

      </div>

    </section>
  );
};

export default Contact;