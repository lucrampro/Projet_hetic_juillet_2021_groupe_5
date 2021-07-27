import React from 'react';

// STYLES
import '../assets/styles/entranceHallDetails.scss'


const EntranceHallDetails = () => (
  
  <>
    <button className="peripherique--menu" style={{ margin: "5%" }}>
      <img src='/imgs/icons/icon-bin.png' alt="" srcSet="" className="peripherique--img" />
      <p>Hall</p>
      <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" className="img--arrow" />
    </button>
    <button className="peripherique--menu">
      <img src='/imgs/icons/Stair.png' alt="" srcSet="" className="peripherique--img" />
      <p>Escalier</p>
      <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" className="img--arrow" />
    </button>
  </>
);

export default EntranceHallDetails;