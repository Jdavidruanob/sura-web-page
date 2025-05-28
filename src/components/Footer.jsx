import React from 'react';
import '../styles/Footer.css';
import logo1 from '../assets/Sura-logo-edit-blanco.png';

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo1} alt="Logo SURA" className="footer-logo" />
      <div className="left-column">
        <p><strong>Soporte Comercial:</strong></p>
        <p>Ariel Palomo</p>
        <p>Celular: 314 7401115</p>
      </div>
      <div className="vertical-line"></div>
      <div className="right-column">
        <p>Dirección: Calle 13A #103-43, segundo piso, ciudad jardín.</p>
        <p>Email: ariel.palomo@asesorsura.com</p>
      </div>
    </div>
  );
};

export default Footer;
