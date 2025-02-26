import React from 'react'
import wppImg from "../assets/wpp-icon.png"
import '../styles/WhatsAppButton.css'

const WhatsAppButton = () => {
  // Define el número de WhatsApp en formato internacional (sin símbolo +)
  const whatsappNumber = "573147401115"; // Ejemplo: 57 (Colombia) + número
  // Crea el mensaje a enviar
  const message = encodeURIComponent(`Hola estoy interesado en la póliza de sura`);
  // Genera el enlace de WhatsApp usando la API
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
    >
      <div className="whatsapp-container">
        <img 
          src={wppImg}
          alt="WhatsApp"
          width="30"
          height="30"
        />
        <span>Contáctanos</span>
      </div>
    </a>
  )
}

export default WhatsAppButton