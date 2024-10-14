// src/components/Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header>
  <div class="container">
      <div class="logo">
          <h1>CREATIC</h1>
          <p>CREATIVE AGENCY</p>
      </div>
      <nav>
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Pages</li>
              <li>Contact Us</li>
              <li>  <FaSearch className="search-icon" /></li>
          </ul>
      </nav>
  </div>
</header>
);

export default Header;
