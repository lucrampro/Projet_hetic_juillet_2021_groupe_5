import React, {useContext, useEffect} from 'react';
// STYLES
import '../assets/styles/details.scss'
// STORE
import { userInfoContext } from '../store'

//COMPONENTS
import {BinDetails} from '../components'


const Details = props => {

  const {userInfo} = useContext(userInfoContext);
  const path = props.location.pathname;
  const node_actually = path.slice(9, path.length);
  const info_node = userInfo.nodes[node_actually];

    useEffect(() => {
      console.log(node_actually);
      
    });

    if (node_actually === 'mailbox') {
        return (
          <div className={'details'}>
            <h1>{info_node.name}</h1>
            <img src={`/imgs/nodes/${info_node.name_img}.png`} alt="" srcSet=""/>
          </div>
        );
    } else if (node_actually === 'bin') {
      return (
        <div className={'details'}>
          <h3>{info_node.name}</h3>
          {/* <div>
            <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" className="details-arrow"/>
            
          </div> */}
          <img src={`/imgs/nodes/${info_node.name_img}.png`} alt="" srcSet="" />
          <BinDetails />
        </div>
      );
    }

}

export default Details;
