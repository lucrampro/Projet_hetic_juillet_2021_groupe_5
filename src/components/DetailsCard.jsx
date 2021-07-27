import React from 'react';
// STYLE
import '../assets/styles/details--card.scss'
const DetailsCard = ({info_node}) => {
  const time_action = info_node._time;

  
  let date_action = new Date(time_action).toLocaleDateString()

  return (
    <div className='details--card'>
        <p className="date_node">{date_action}</p>
        <p className="action">Boite aux lettres ouvertes</p>
        <p className="hours_node">12:56</p>
    </div>
  );
}

export default DetailsCard;
