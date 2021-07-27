import React, {useContext, useEffect} from 'react';
// STORE
import { userInfoContext} from '../store'
// ASSETS
import '../assets/styles/home.scss';
import { useHistory } from 'react-router-dom'

// COMPONENTS
import {PeripheriqueCard} from '../components'

const Home = () => {

  const {userInfo} = useContext(userInfoContext)
  
  useEffect(() => {

  });
  const history = useHistory();
  const goToNotificationPage = () => {
    history.push(`/notifications`)
}

  return (
    <div className="home">
      <h2>Mes objets connectés</h2>
      {
        Object.keys(userInfo.nodes).map( function (value, index) {
          return <PeripheriqueCard key={index} path={userInfo.nodes[value].path} title={userInfo.nodes[value].name} img={userInfo.nodes[value].name_img} id={userInfo.nodes[value].name_img}/>
        })
      }
      
    </div>
  );
}

export default Home;
