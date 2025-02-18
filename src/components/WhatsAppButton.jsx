// src/components/WhatsAppButton.jsx
import React from 'react'
import wppImg from "../assets/wpp-icon.png"
const WhatsAppButton = () => {
  const whatsappNumber = "TUNUMERO" // Reemplaza con tu número
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
    >
      <img 
        src={wppImg} // Asegúrate de tener esta imagen en tu carpeta public
        alt="WhatsApp"
        width="60"
        height="60"
      />
    </a>
  )
}

export default WhatsAppButton