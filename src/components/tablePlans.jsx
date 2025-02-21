// TablePlans.jsx
import React, { useState, useRef } from 'react';
import '../styles/tablePlans.css';

const TablePlans = () => {
  const [showAll, setShowAll] = useState(false);
  const [buttonClass, setButtonClass] = useState('');
  const tableRef = useRef(null);

  const rows = [
    ['Habitación individual', '❌', '✔️', '❌'],
    ['Unidad de cuidados intensivos y especiales', '✔️', '❌', '✔️'],
    ['Gastos hospitalarios', '❌', '✔️', '❌'],
    ['Hospitalizaciones psiquiátricas', '❌', '✔️', '❌'],
    ['Transplantes', '❌', '✔️', '❌'],
    ['Cirugía ambulatoria y tratamiento de fracturas, luxaciones y esguinces', '❌', '✔️', '❌'],
    ['Tratamiento ambulatorio por cáncer o leucemia', '❌', '✔️', '❌'],
    ['Tratamiento por hemodiálisis y diálisis peritoneal', '❌', '✔️', '❌'],
    ['Tratamiento por VIH - SIDA', '❌', '✔️', '❌'],
    ['Exámenes de diagnóstico', '❌', '✔️', '❌'],
    ['Terapias físicas', '❌', '✔️', '❌'],
    ['Nebulizaciones, terapias del lenguaje, respiratorias, cardiacas, ortópticas, etc.', '❌', '✔️', '❌'],
    // ... otros renglones ...
  ];

  const handleToggle = () => {
    if (showAll) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
    setButtonClass(!showAll ? 'movable' : '');
  };

  return (
    <div id="tables-container">
      <h2 id="table-title">¿Que te ofrecemos?</h2>
      <table ref={tableRef} id="plans-table">
        <thead>
          <tr>
            <th></th>
            <th>Salud Global</th>
            <th>Salud Clásico</th>
            <th>Salud Evoluciona</th>
          </tr>
        </thead>
        <tbody id="plans-tbody">
          {rows.slice(0, showAll ? rows.length : 9).map((row, index) => (
            <tr key={index} className={!showAll && index >= 6 ? 'hidden' : ''}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!showAll && <div id="table-fade"></div>}
      <button id="button" className={buttonClass} onClick={handleToggle}>
        {showAll ? 'Mostrar menos' : 'Mostrar todo'}
      </button>
      <p id="table-info">
        ¿Aún no tienes muy claro cuál plan debes elegir? no te preocupes contáctanos y te asesoramos de forma personalizada.
      </p>
      <div id="video-container">
        <iframe
          id="youtube-video"
          src="https://www.youtube.com/embed/K9codgO4_jg" // Formato correcto para embed
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TablePlans;