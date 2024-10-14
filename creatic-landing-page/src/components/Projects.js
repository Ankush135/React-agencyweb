// src/components/Projects.js
import React from 'react';
import './Projects.css';
import leftImage from '../assets/left-image.png'
import centerImage from '../assets/center.png'
import rightImage from '../assets/right-image.png'


const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Enjoy Our <span className="highlight">Latest</span> Projects</h2>
      <p>Our Work</p>
      <div className="projects-gallery">
        <div className="project-item"><img src={leftImage} alt="Project 1" /></div>
        <div className="project-item"><img src={centerImage} alt="Project 2" /></div>
        <div className="project-item"><img src={rightImage} alt="Project 3" /></div>
      </div>
    </section>
  );
};

export default Projects;
