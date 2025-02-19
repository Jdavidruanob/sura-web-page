import React, { useRef, useEffect } from 'react';
import '../styles/Services.css';
import image from '../assets/image1.png';

const Services = () => {
  const servicesRef = useRef(null);

  // Función de easing (igual que en HeroSection)
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  // Función de scroll suave personalizada (igual que en HeroSection)
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

  // Función que desplaza la sección usando el scroll suave, igual que en HeroSection.
  // Aquí se envía al section con id "planes"
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      smoothScrollTo(offsetPosition, 1500);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <div ref={servicesRef} className="services fade">
      <img src={image} alt="Consultando los servicios" className="services__image" />
      <div className="services__content">
        <p>
          Cuanto más sabemos de ti, mejor podemos protegerte. Por eso, te ofrecemos una variedad
          de programas y servicios diseñados para cuidarte a ti y a tus seres queridos. Descubre más
          sobre estos servicios y trabajemos juntos por tu bienestar.
        </p>
        <button className="services__button" onClick={() => scrollToSection('planes')}>
          Ver planes
        </button>
      </div>
    </div>
  );
};

export default Services;