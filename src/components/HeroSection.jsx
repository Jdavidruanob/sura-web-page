// HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="text-container">
        <h1 className='title-hero'>Protege tu salud y la de tu familia con Sura</h1>
        <p className='subtitle-hero'>Descubre tu plan ideal de medicina prepagada.</p>
        
        <div className="social-proof">
          <p className="proof-text">+20 de las mejores clínicas de Colombia</p>
          <p className="proof-text">+420,000 familias ya eligieron a Sura</p>
        </div>

        <button 
          id='button-hero'
          onClick={() => scrollToSection('servicios')}
        >
          Dejanos guiarte
        </button>
      </div>
      <div className="image-container">
        <img src={heroImage} alt="Health and Family" />
      </div>
    </section>
  );
};

export default HeroSection;