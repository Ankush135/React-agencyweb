import React from 'react';
import './AboutSection.css'
import robotImage from '../assets/robot-image.png'; // Adjust path as necessary

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="robot-image">
        <img src={robotImage} alt="Robot" />
      </div>
      <div className="about-text">
        <h3>ABOUT US</h3>
        <h2>
          We Bring <span className="highlight">Creative</span> Ideas To Life.
        </h2>
        <p className="subtitle">We Love Creating</p>
        <p>
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro Neque porro.
        </p>
        <p>
          Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem
          ipsum Neque quis ipsum.
        </p>
        <button>Read More</button>
      </div>
    </section>
  );
};

export default AboutUs;
