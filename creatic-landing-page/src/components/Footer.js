import React from 'react';
import './Footer.css';
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import linkden from '../assets/linkden.png'
import pinterest from '../assets/pinterest.png'
import x from '../assets/x.png'


const Footer = () => (
  <footer class="footer">
    <div class="footer-content">
        <h2 class="footer-logo">CREATIC</h2>
        <p class="footer-subtitle">Creative Agency</p>
        <ul class="footer-links">
            <li>Categories</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Pages</li>
            <li>Support</li>
        </ul>
        <p class="footer-text">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit Neque porro
        </p>
        <ul class="social-icons">
            <li><img src={facebook} alt="Project 3"/></li>
            <li><img src={x} alt="Project 3"/></li>
            <li><img src={pinterest} alt="Project 3"/></li>
            <li><img src={linkden} alt="Project 3"/></li>
            <li><img src={whatsapp} alt="Project 3"/></li>
        </ul>
    </div>
    <div class="footer-bottom">
        <p>Copyright © 2003-2023 Creatic Agency All Rights Reserved.</p>
    </div>
</footer>
);

export default Footer;
