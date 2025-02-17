import React from 'react';
import '../styles/Services.css';
import image from '../assets/image1.png';

const Services = () => {
    return (
        <div className="services">
            <img src={image} alt="Consultando los servicios" className="services__image" />
            <div className="services__content">
                <p>Cuanto más sabemos de ti, mejor podemos protegerte. Por eso, te ofrecemos una variedad de programas y servicios diseñados para cuidarte a ti y a tus seres queridos. Descubre más sobre estos servicios y trabajemos juntos por tu bienestar.</p>
                <button className="services__button">Ver planes</button>
            </div>
        </div>
    );
};

export default Services;