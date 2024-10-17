import React from 'react';
import './HeroSection.css'
import heroImage from '../assets/hero-image.jpg'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h3>Welcome to Creatic</h3>
        <h1>
            We Are <span className="highlight">Creative</span> Design Agency.
        </h1>
        <p>
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro Neque porro.Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem
          ipsum Neque quis ipsum.
        </p>
        <button>GET IN TOUCH</button>
      </div>
      <div className="hero-image">
          <img src={heroImage} alt="BeautifulWomen" />
      </div>
    </section>
  );
};

export default HeroSection;
