import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// STYLES
import '../assets/styles/details.scss'
// STORE
import { userInfoContext } from '../store'
// LIBRARY
import Axios from 'axios'
//COMPONENTS
import { BinDetails } from '../components'
import {EntranceHallDetails} from '../components'


const Details = props => {
  let history = useHistory();

  const {userInfo} = useContext(userInfoContext);
  const path = props.location.pathname;
  const node_actually = path.slice(9, path.length);
  const info_node = userInfo.nodes[node_actually];

  const getNodeInfluxInformation = () => {
    // mailbox_node
    Axios.get(`http://localhost:3001/influx/${info_node.route}`)
    .then(response => {
      console.log(response.data.data)
    })
    .catch(error => console.error(error))
  }

  const goToPreviousPath = () => {
    history.goBack()
  }

    useEffect(() => {
      
      getNodeInfluxInformation();
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
          <div className="details--bin">
            <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" id="arrow" onClick={goToPreviousPath}/>
            <h3>{info_node.name}</h3>
          </div>
          <img src={`/imgs/nodes/${info_node.name_img}.png`} alt="" srcSet="" />
          <BinDetails />
        </div>
      );
    }
  else if (node_actually === 'entranceHall') {
      return (
        <div className={'details'}>
          <div className="details--entranceHall">
            <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" id="arrow" onClick={goToPreviousPath}/>
            <h3>{info_node.name}</h3>
          </div>
          <img src={`/imgs/nodes/${info_node.name_img}.png`} alt="" srcSet="" />
          <EntranceHallDetails />
        </div>
      );
    }

}

export default Details;
