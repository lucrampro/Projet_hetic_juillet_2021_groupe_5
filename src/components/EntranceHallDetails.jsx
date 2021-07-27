import React from 'react';
import { useHistory } from "react-router-dom";
// STYLES
import '../assets/styles/entranceHallDetails.scss'

function currentRoute(route) {
  let counter = 0
  counter++
  console.log(route, counter)
}

const EntranceHallDetails = props => (
  
  <>
    <button className="peripherique--menu" style={{ margin: "5%" }} onClick={currentRoute(props.route)}>
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