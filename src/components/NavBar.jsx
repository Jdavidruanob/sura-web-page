/* filepath: /src/components/Navbar.jsx */
import React from 'react';
import './../styles/NavBar.css';

const Navbar = () => {
    return (
        <div className='container'>
          <nav className='navbar'>
            <div className='navbar-left'>
              <img src='/src/assets/seguros-sura-nav.png' alt='Logo' className='navbar-logo' />
            </div>
            
            <div className='navbar-right'>
              <a href='#' className='navbar-link'>Asesoría</a>
              <a href='#' className='navbar-link'>Ver Planes</a>
            </div>
          </nav>
        </div>
    );
};

export default Navbar;