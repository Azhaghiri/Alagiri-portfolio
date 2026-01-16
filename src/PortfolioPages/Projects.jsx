import React from "react";

const Projects = () => {
  return (
    <section className="section">
      <h1>Projects</h1>

      <div className="card">
        <h3>Actto ITR Plan Selection Web Application</h3>
        <p><strong>Role:</strong> Freelance Web Developer</p>
        <ul>
          <li>Developed a responsive tax filing plan selection system</li>
          <li>Implemented form validation and popup modals</li>
          <li>Used localStorage to maintain session data</li>
          <li>Technologies: HTML, CSS, Bootstrap, JavaScript</li>
        </ul>
      </div>

      <div className="card">
        <h3>RiyaTex – Textile Product Showcase Website</h3>
        <ul>
          <li>Designed a responsive textile product website</li>
          <li>Implemented interactive UI components</li>
          <li>Ensured mobile-first design compatibility</li>
          <li>Technologies: HTML, CSS, Bootstrap, JavaScript</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
