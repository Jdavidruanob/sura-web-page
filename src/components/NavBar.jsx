import React from 'react';
import './../styles/NavBar.css';

const Navbar = () => {
  // Define el número de WhatsApp en formato internacional (sin símbolo +)
  const whatsappNumber = "573147401115"; // Ejemplo: 57 (Colombia) + número
  // Crea el mensaje a enviar
  const message = encodeURIComponent(`Hola estoy interesado en la póliza de sura`);
  // Genera el enlace de WhatsApp usando la API
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  

  const smoothScrollTo = (endY) => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: endY, behavior: 'smooth' });
    } else {
      // Fallback simple para navegadores sin soporte smooth scroll
      window.scrollTo(0, endY);
    }
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
            <img src='/seguros-sura-logo-azul.jpg' alt='Logo' className='navbar-logo' />
          </a>
        </div>

        <div className='navbar-right'>
          <button onClick={() => scrollToSection('planes')} className='navbar-link'>
            Planes
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