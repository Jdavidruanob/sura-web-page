import React from 'react';
import '../styles/PlanCard.css'; // Importa el archivo CSS

const PlanCard = ({ title, image, paragraph, borderColor }) => {
  return (
    <a href="/plan-details" id="card" style={{ borderTop: `10px solid ${borderColor}` }}> {/* Enlace que envuelve toda la tarjeta */}
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