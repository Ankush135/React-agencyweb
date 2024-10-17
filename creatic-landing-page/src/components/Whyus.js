import React from 'react';
import './Whyus.css';

const WhyUsSection = () => {
  return (
    <section className="why-us">
      <div className="why-us-content">
        <h2>WHY US?</h2>
        <h1>25 YEARS OF <span className="highlight">EXPERIENCE</span> AS A CREATIVE AGENCY</h1>
        <a href="#read-more" className="read-more-btn">READ MORE</a>
      </div>
      <div className="why-us-list">
        <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit Neque porro Lorem ipsum</p>
        <ul>
          <li>Happy Customer</li>
          <li>Experienced Team</li>
          <li>Modern Technology</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyUsSection;
