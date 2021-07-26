import React from 'react';
import '../assets/styles/assistance.scss'
const Assistance = () => {
  return (
    <div className="assistance">
      <p>Assitance Téléphonique</p>

      <p>Veuillez appeler le numéro ci dessous en indiquant votre numéro d’identification</p>

      <a href="tel:+33970808660" className="number"> 09 70 80 86 60</a>
    </div>
  );
}

export default Assistance;
