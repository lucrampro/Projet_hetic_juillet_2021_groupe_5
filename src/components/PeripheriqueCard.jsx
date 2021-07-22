import React from 'react';
// STYLE
import '../assets/styles/peripherique-card.scss'
// IMG
import mailbox_node_img from '../assets/imgs/mailbox_node.png'

const PeripheriqueCard = (props) => {
  return (
    <div className="peripherique--card">
      <img src={mailbox_node_img} alt="" srcSet=""/>
  <h2>{props.title ? props.title : "Default Title"}</h2>
      <button>Voir</button>
    </div>
  );
}

export default PeripheriqueCard;
