import React from 'react';
import './Testimonials.css';
import heroImage from '../assets/hero-image.jpg'

const Testimonials = () => {
  return (
    <section class="testimonials">
    <div class="left-image"></div> 
    <div class="testimonial-container">
        <div class="testimonial-content">
            <h2 class="section-title">WHAT <span>OUR</span> CLIENTS SAY?</h2>
            <p class="section-subtitle">TESTIMONIALS</p>
            <div class="testimonial-box">
                <p class="testimonial-text">
                    Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit Neque porro
                </p>
                <div class="testimonial-author">
                    <img src={heroImage} alt="AuthorI" class="author-i"/>
                    <div class="author-info">
                        <h4>Carol Chaves</h4>
                        <p>@carolc@gmail.com</p>
                    </div>
                    <span class="quote-icon">“</span>
                </div>
            </div>
            <button>VIEW ALL TESTIMONIALS</button>
        </div>
    </div>
    <div class="right-image"></div> 
</section>
  );
};

export default Testimonials;
