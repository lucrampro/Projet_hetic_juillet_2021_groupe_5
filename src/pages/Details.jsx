import React, {useContext, useEffect, useState} from 'react';
// STYLES
import '../assets/styles/details.scss'
// STORE
import { userInfoContext } from '../store'
// LIBRARY
import Axios from 'axios'
//COMPONENTS
import { BinDetails } from '../components'
import {EntranceHallDetails, MailBoxDetails} from '../components'


const Details = props => {

  const {userInfo} = useContext(userInfoContext);
  const path = props.location.pathname;
  const node_actually_path = path.slice(9, path.length);
  const info_node_firebase = userInfo.nodes[node_actually_path];
  const [info_node_influx, setinfo_node_influx] = useState([]);

  const getNodeInfluxInformation = () => {
    // get info apis
    Axios.get(`http://localhost:3001/influx/${info_node_firebase.route}`)
    .then(response => {
      setinfo_node_influx(response.data.data);
      console.log(response.data.data);
      
    })
    .catch(error => console.error(error))
  }

    useEffect(() => {
      
      getNodeInfluxInformation();
    }, []);

    if (node_actually_path === 'mailbox') {
        return (
          <div className={'details'}>
            <MailBoxDetails name={info_node_firebase.name} img_path={info_node_firebase.name_img} info_node={info_node_influx}/>
          </div>
        );
    } else if (node_actually_path === 'bin') {
      return (
        <div className={'details'}>
          <h3>{info_node_firebase.name}</h3>
          {/* <div>
            <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" className="details-arrow"/>
            
          </div> */}
          <img src={`/imgs/nodes/${info_node_firebase.name_img}.png`} alt="" srcSet="" />
          <BinDetails />
        </div>
      );
    }
  else if (node_actually_path === 'entranceHall') {
      return (
        <div className={'details'}>
<<<<<<< HEAD
          <h1>{info_node_firebase.name}</h1>
          <img src={`/imgs/nodes/${info_node_firebase.name_img}.png`} alt="" srcSet="" />
=======
          <div className="details--entranceHall">
            <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" id="arrow"/>
            <h3>{info_node.name}</h3>
          </div>
          <img src={`/imgs/nodes/${info_node.name_img}.png`} alt="" srcSet="" />
>>>>>>> 2a02dbc0251e2d42b168c5256d593b5d3b745251
          <EntranceHallDetails />
        </div>
      );
    }

}

export default Details;
