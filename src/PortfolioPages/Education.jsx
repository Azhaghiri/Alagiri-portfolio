import React from "react";

const Education = () => {
  return (
    <section className="section">
      <h1>Education</h1>

      <div className="card">
        <h3>Bachelor of Commerce (B.Com)</h3>
        <p>Salem Sowdeswari College, Salem</p>
        <span>2021 – 2024</span>
      </div>

      <div className="card">
        <h3>MERN Stack Web Developer</h3>
        <p>AccioJob</p>
        <span>2025 – 2026</span>
        <ul>
          <li>HTML, CSS, Bootstrap</li>
          <li>JavaScript, React</li>
          <li>Node.js, Express.js, MongoDB</li>
          <li>REST APIs & Full Stack Projects</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
