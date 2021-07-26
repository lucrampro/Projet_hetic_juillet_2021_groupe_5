import React from 'react';
// STYLE
import '../assets/styles/peripherique-card.scss'
// IMG
import { useHistory } from 'react-router-dom'


const PeripheriqueCard = (props) => {

  const history = useHistory();
  
  const goToDetailsPage = () => {
    history.push(`/details/${props.path}`)
  }

  return (
    <div className="peripherique--card" id={props.id} onClick={goToDetailsPage}>
      {/* <img src={require(`../assets/imgs/mailbox_node.png`)} alt="" srcSet=""/> */}
      <img src={`/imgs/nodes/${props.img}.png`} alt="" srcSet=""/>
      <h2>{props.title ? props.title : "Default Title"}</h2>
      <button>Voir</button>
    </div>
  );
}

export default PeripheriqueCard;
