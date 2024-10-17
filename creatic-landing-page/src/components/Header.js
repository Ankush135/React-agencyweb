// Header.jsx
import React, { useState } from 'react';
import './Header.css'; // Import CSS styles

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on mobile
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <h1>CREATIC</h1>
          <p>CREATIVE AGENCY</p>
        </div>

        {/* Navigation Links */}
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

        {/* Hamburger Menu Icon for Mobile */}
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
