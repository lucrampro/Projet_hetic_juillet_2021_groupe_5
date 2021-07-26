import React from 'react';
// STYLE
import '../assets/styles/peripherique-card.scss'
// IMG
import mailbox_node_img from '../assets/imgs/mailbox_node.png'
import { useHistory } from 'react-router-dom'


const PeripheriqueCard = (props) => {

  const history = useHistory();

  const goToDetails = () => {
    history.push('/details')
  }

  return (
    <div className="peripherique--card">
      <img src={mailbox_node_img} alt="" srcSet=""/>
  <h2>{props.title ? props.title : "Default Title"}</h2>
      <button>Voir</button>
    </div>
  );
}

export default PeripheriqueCard;
