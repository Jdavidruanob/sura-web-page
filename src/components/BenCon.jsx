import React from 'react';
import '../styles/BenCon.css';
import logo1 from '../assets/image2.png'; 
import logo2 from '../assets/image3.png';
import logo3 from '../assets/image4.png';

const BenCon = () => {
    return (
        <div className="benefits">
            <div className="benefits-text">
                <p>Olvídate de las largas esperas y los altos costos médicos. Con <span className="highlight">SURA</span>, accede a atención médica de calidad sin complicaciones.</p>
                <p className='highlight margin-top'>Afíliate ahora y obtén</p>
            </div>
            <div className="benefits-images">
                <div className="image-hover-container">
                    <div className="flip-card">
                        <div className="flip-card-front">
                            <img className="bencon-logo" src={logo1} alt="Logo 1" />
                            <h2 className="bencon-title">Acompañamiento</h2>
                        </div>
                        <div className="flip-card-back">
                            <h2>Parte trasera 1</h2>
                            <p>Contenido adicional aquí</p>
                        </div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <div className="flip-card bencon-container">
                        <div className="flip-card-front">
                            <img className="bencon-logo" src={logo2} alt="Logo 2" />
                            <h2 className="bencon-title">Acceso rápido</h2>
                        </div>
                        <div className="flip-card-back">
                            <h2>Parte trasera 2</h2>
                            <p>Contenido adicional aquí</p>
                        </div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <div className="flip-card bencon-container">
                        <div className="flip-card-front">
                            <img className="bencon-logo" src={logo3} alt="Logo 3" />
                            <h2 className="bencon-title">Respaldo</h2>
                        </div>
                        <div className="flip-card-back">
                            <h2>Parte trasera 3</h2>
                            <p>Contenido adicional aquí</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenCon;