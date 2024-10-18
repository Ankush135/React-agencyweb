import React, { useState } from 'react';
import './Header.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>CREATIC</h1>
          <p>CREATIVE AGENCY</p>
        </div>

        <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#pages">Pages</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        <div className="menu-icon" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
