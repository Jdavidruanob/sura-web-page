import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/hero-image.png'; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="text-container">
        <h1 className='title-hero'>Protege tu salud y la de tu familia con Sura</h1>
        <p className='subtitle-hero'>Medicina prepagada de la mas alta calidad</p>
        <button id='button-hero'>Dejanos guiarte</button>
      </div>
      <div className="image-container">
        <img src={heroImage} alt="Health and Family" />
      </div>
    </section>
  );
};

export default HeroSection;