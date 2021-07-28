import React from 'react';
// STYLE
import '../assets/styles/mailbox.scss'
import { InfoCard, DetailsCard } from './'

const MailBoxDetails = ({ name, img_path, info_node }) => {
  return (
    <div className='mailbox--details'>
      {/* <p>mailbox</p> */}
      <img src={`/imgs/nodes/${img_path}.png`} alt="" srcSet=""/>
      <div className="info--wrapper">
        <p className='infos'>Infos</p>
        <InfoCard info_node={info_node}/>
        <p>Détails</p>
        <div className="wrapper--details">
          <DetailsCard action_text={'Boite aux lettres ouvertes'} info_node={info_node}/>
        </div>
      </div>
    </div>
  );
}

export default MailBoxDetails;
