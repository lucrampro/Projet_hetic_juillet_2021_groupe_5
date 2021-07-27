import React from 'react';
import '../assets/styles/info-card.scss'

const InfoCard = ({info_node}) => {

  console.log(info_node);
  
  return (
    <div className="info--card">
      <img src="/imgs/icons/mailbox_icon.png" alt=""/>
      <div>
        <p className="info">{info_node._value === 1 ? 'Vous avez du courrier' : 'Vous n\'avez pas de courrier'}</p>
      </div>
    </div>
  );
}

export default InfoCard;
