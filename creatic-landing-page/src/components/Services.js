import React from 'react';
import './Services.css'
import videoIcon from '../assets/video-icon.png';
import graphicIcon from '../assets/graphic-icon.png';
import uiuxIcon from '../assets/uiux-icon.png';
import webIcon from '../assets/web-icon.png';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-text">
        <h3>OUR SERVICES</h3>
        <h2>
          Experience The Power Of <span className="highlight">Innovation</span>.
        </h2>
        <p>
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, 
          Neque porro elit Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum.
        </p>
        <button>View All</button>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={videoIcon} alt="Video Marketing" />
          <h4>VIDEO MARKETING</h4>
          <p>Lorem ipsum Neque do porro quisquam est qui do quam.</p>
        </div>
        <div className="service-card">
          <img src={graphicIcon} alt="Graphic Design" />
          <h4>GRAPHIC DESIGN</h4>
          <p>Lorem ipsum Neque do porro quisquam est qui do quam.</p>
        </div>
        <div className="service-card">
          <img src={uiuxIcon} alt="UI/UX Design" />
          <h4>UI/UX DESIGN</h4>
          <p>Lorem ipsum Neque do porro quisquam est qui do quam.</p>
        </div>
        <div className="service-card">
          <img src={webIcon} alt="Website Design" />
          <h4>WEBSITE DESIGN</h4>
          <p>Lorem ipsum Neque do porro quisquam est qui do quam.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
