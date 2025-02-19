// NavBar.jsx
import React from 'react';
import './../styles/NavBar.css';

const Navbar = () => {
  const whatsappNumber = "3116426370";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // ajusta esto según la altura de tu navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}>
            <img src='/src/assets/seguros-sura-nav.png' alt='Logo' className='navbar-logo' />
          </a>
        </div>
        
        <div className='navbar-right'>
          <button onClick={() => scrollToSection('planes')} 
            className='navbar-link'>Planes</button>
          
          <button onClick={() => scrollToSection('beneficios')} 
            className='navbar-link'>Beneficios</button>
          
          <button onClick={() => scrollToSection('precios')} 
            className='navbar-link'>Precios</button>
          
          <a href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='navbar-button'>Contáctanos</a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;