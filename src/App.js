import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import BackgroundDropdown from "./backgroundChanger/BackgroundDropdown.js";

const App = () => {
  const [bgChanger, setBgChanger] = useState(0);

  const bgHandler = (val) => {
    setBgChanger(val);
  };
  return (
    <Router>
      <Nav />
      <Background bgChanger={bgChanger} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
      <BackgroundDropdown bgHandler={bgHandler} />
    </Router>
  );
};

export default App;
