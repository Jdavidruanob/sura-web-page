import React from 'react';
import '../styles/PlanCard.css';

const PlanCard = ({ title, image, paragraph, borderColor }) => {
  // Define el número de WhatsApp
  const whatsappNumber = "3147401115";
  // Crea el mensaje a enviar
  const message = encodeURIComponent(`Hola, estoy interesado en el plan ${title}. ¿Podrías asesorarme por favor?`);
  // Genera el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      id="card" 
      style={{ borderTop: `10px solid ${borderColor}` }}
    >
      <div id="image-container">
        <img src={image} alt="Plan Image" id="image" />
      </div>
      <div id="title-container">
        <h2 id="title">{title}</h2>
      </div>
      <div id="paragraph-container">
        <p id="paragraph">{paragraph}</p>
      </div>
    </a>
  );
}

export default PlanCard;