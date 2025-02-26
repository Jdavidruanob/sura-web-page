import React from 'react';
import '../styles/Footer.css';
import logo1 from '../assets/Logo-SURA-blanco 1.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo1} alt="Logo SURA" className="footer-logo" />
      <div className="left-column">
        <p><strong>Soporte Comercial:</strong></p>
        <p>Ariel Palomo</p>
        <p>Phone: 314 7401115</p>
      </div>
      <div className="vertical-line"></div>
      <div className="right-column">
        <p>Dirección: <strong>Calle 13A #103-43, segundo piso, ciudad jardín.</strong></p>
        <p>Email: <strong>ariel.palomo@asesorsura.com</strong></p>
      </div>
    </div>
  );
};

export default Footer;
