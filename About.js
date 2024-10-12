import React from 'react';
import './About.css'; // Import the CSS for the About section

const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        I'm a passionate web developer with a strong background in building modern, interactive websites. I specialize in front-end technologies like React, JavaScript, and CSS, and love turning creative ideas into real-world applications.
      </p>

      <div className="skills">
        <div className="skill-item">
          <h3>Frontend Development</h3>
          <p>React, JavaScript, CSS, HTML</p>
        </div>
        <div className="skill-item">
          <h3>Backend Development</h3>
          <p>Node.js, Express, MongoDB</p>
        </div>
        <div className="skill-item">
          <h3>Design</h3>
          <p>Figma, Adobe XD, UI/UX</p>
        </div>
      </div>
    </section>
  );
};

export default About;
