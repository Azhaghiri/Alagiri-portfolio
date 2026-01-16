import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import DarkModeButton from "./DarkModeButton ";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [skills, setSkills] = useState("(Developer)"); 
  const skill = ["(FullStack Developer)","(MERN stack Developer)","(Frontend Engineer)","(Web Designer)","(Developer)"]

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSkills(skill[index]);
      index = (index + 1) % skill.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <Router>  
      <nav className="navbar">
        <h2 className="logo">Azaghiri V <span className="changeSkills" >{skills}</span> </h2>

        {/* Hamburger */}
        <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/education" onClick={() => setOpen(false)}>Education</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/hobbies" onClick={() => setOpen(false)}>Hobbies</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
           <DarkModeButton setOpen={setOpen} />

          
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
