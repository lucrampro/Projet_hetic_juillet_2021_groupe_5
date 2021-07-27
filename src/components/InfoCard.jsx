import React from 'react';
import '../assets/styles/info-card.scss'

const InfoCard = ({info_node}) => {

  console.log(info_node);
  
  return (
    <div className="info--card">
      <img src="/imgs/icons/mailbox_icon.png" alt=""/>
      <div>
        <p className="title--info">Ouverture</p>
        <p className="info">{info_node._value}</p>
      </div>
    </div>
  );
}

export default InfoCard;
