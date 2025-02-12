import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='navbar-left'>
          <a href='#' className='navbar-link'>
            Ascesoria
            <img src='/src/assets/wpp-icon.png' alt='Ascesoria' className='navbar-icon' />
          </a>
        </div>
        <div className='navbar-center'>
          <img src='/src/assets/seguros-sura-nav.png' alt='Logo' className='navbar-logo' />
        </div>
        <div className='navbar-right'>
          <a href='#' className='navbar-link'>Ver Planes</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;