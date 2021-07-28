import React from 'react';
// STYLE
import '../assets/styles/details--card.scss'
const DetailsCard = ({info_node, action_text}) => {
  const time_action = info_node._time;

  
  let date_action = new Date(time_action).toLocaleDateString()

  return (
    <div className='details--card'>
        <p className="date_node">{date_action}</p>
  <p className="action">{action_text}</p>
        <p className="hours_node">12:56</p>
    </div>
  );
}

export default DetailsCard;
