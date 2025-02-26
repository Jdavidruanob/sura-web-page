// BenCon.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/BenCon.css';
import logo1 from '../assets/image2.png'; 
import logo2 from '../assets/image3.png';
import logo3 from '../assets/image4.png';

const BenCon = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-text');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <div id="benefits">
            <div id="benefits-text">
                <p id="main-text" ref={textRef}>
                    Olvídate de las largas esperas y los altos costos médicos. Con 
                    <span id="sura-highlight">SURA</span>, 
                    accede a atención médica de calidad sin complicaciones.
                </p>
            </div>
            <p id="highlight-text">Afíliate ahora y obtén</p>
            
            <div id="benefits-images">
                <div id="image-hover-container">
                    <div id="flip-card">
                        <div id="flip-card-front">
                            <img id="bencon-logo" src={logo1} alt="Logo 1" />
                            <h2 id="bencon-title">Acompañamiento</h2>
                        </div>
                        <div id="flip-card-back">
                            <p>Con tu Seguro de Salud, cuentas con acompañamiento exclusivo para acceder sin demoras a consultas con especialistas y exámenes de imagenología o radiología, sin necesidad de autorización médica.</p>
                        </div>
                    </div>
                </div>

                <div id="image-hover-container">
                    <div id="flip-card">
                        <div id="flip-card-front">
                            <img id="bencon-logo" src={logo2} alt="Logo 2" />
                            <h2 id="bencon-title">Disponibilidad</h2>
                        </div>
                        <div id="flip-card-back">
                            <p>Cuentas con cobertura 24/7 en todos los centros de salud Sura y clínicas aliadas en Colombia. Disfruta la tranquilidad de ser atendido por una red de especialistas según tu necesidad, con acompañamiento en momentos difíciles para garantizar el mejor servicio de salud.</p>
                        </div>
                    </div>
                </div>

                <div id="image-hover-container">
                    <div id="flip-card">
                        <div id="flip-card-front">
                            <img id="bencon-logo" src={logo3} alt="Logo 3" />
                            <h2 id="bencon-title">Seguridad</h2>
                        </div>
                        <div id="flip-card-back">
                            <p>Tener el respaldo de la Póliza de Sura, es estar seguro de tener las mejores coberturas en temas de hospitalización, Cirugías, gastos hospitalarios, urgencias, acceso a todas las especialidades y la cobertura integral en todo el Pais.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenCon;