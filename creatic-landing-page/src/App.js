import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Whyus from './components/Whyus';
import Testimonials from './components/Teastimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Achievements/>
      <Projects />
      <Whyus/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
