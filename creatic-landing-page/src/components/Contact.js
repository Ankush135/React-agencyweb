import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer class="footer">

      <div class="footer-top">
        <div class="container">
            <div class="footer-contact">
                <h2>Get In <span class="highlight">Touch</span></h2>
                <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit Neque porro.</p>

                <ul class="contact-info">
                    <li>
                        <i class="icon-location"></i>
                        <p><strong>📍Office Address</strong>98, Arco St. PR City, 33414, Indonesia</p>
                    </li>
                    <li>
                        <i class="icon-phone"></i>
                        <p><strong>📞Call Us</strong>(+BK) 123 456 7891</p>
                    </li>
                    <li>
                        <i class="icon-mail"></i>
                        <p><strong>📧Mail Us</strong>info@creaticagency.com</p>
                    </li>
                </ul>
            </div>

            <div class="footer-form">
                <form action="#">
                    <input type="text" placeholder="Your Name" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
              
            </div>
        </div>
    </div>
    </footer>

  );
};

export default Contact;
