// HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  // Función de easing
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  // Función de scroll suave personalizada
  const smoothScrollTo = (endY, duration) => {
    const startY = window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const step = () => {
      const now = new Date().getTime();
      const time = now - startTime;
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      window.scrollTo(0, newY);
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      // Duración personalizada de 1.5 segundos (1500 ms)
      smoothScrollTo(offsetPosition, 1500);
    }
  };

  return (
    <section className="hero-section">
      <div className="text-container">
        <h1 className="title-hero">Protege tu salud y la de tu familia con Sura</h1>
        <p className="subtitle-hero">Descubre tu plan ideal de medicina prepagada.</p>
        
        <div className="social-proof">
          <p className="proof-text">+20 de las mejores clínicas de Colombia</p>
          <p className="proof-text">+420,000 familias ya eligieron a Sura</p>
        </div>

        <button 
          id="button-hero"
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