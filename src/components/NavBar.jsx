import React from 'react';
import './../styles/NavBar.css';

const Navbar = () => {
  const whatsappNumber = "3116426370";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

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

  // Actualizamos scrollToSection para usar la función personalizada
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // ajusta este valor según la altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      // Duración personalizada de 1.5 segundos (1500 ms)
      smoothScrollTo(offsetPosition, 1500);
    }
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            <img src='/src/assets/seguros-sura-nav.png' alt='Logo' className='navbar-logo' />
          </a>
        </div>

        <div className='navbar-right'>
          <button onClick={() => scrollToSection('planes')} className='navbar-link'>
            Planes
          </button>
          
          <button onClick={() => scrollToSection('beneficios')} className='navbar-link'>
            Beneficios
          </button>
          
          <button onClick={() => scrollToSection('precios')} className='navbar-link'>
            Precios
          </button>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className='navbar-button'
          >
            Contáctanos
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;