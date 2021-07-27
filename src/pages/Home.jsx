import React, {useContext, useEffect} from 'react';
// STORE
import { userInfoContext} from '../store'
// ASSETS
import '../assets/styles/home.scss';

// COMPONENTS
import {PeripheriqueCard} from '../components'

const Home = () => {

  const {userInfo} = useContext(userInfoContext)
  
  useEffect(() => {

  });

  return (
    <div className="home">
      <header>
        <h1>SecuHome</h1>
        <img src='/imgs/notification_icon.png' alt="" srcSet=""/>
      </header>
      <p>Mes objets connectés</p>
      {
        Object.keys(userInfo.nodes).map( function (value, index) {
          return <PeripheriqueCard key={index} path={userInfo.nodes[value].path} title={userInfo.nodes[value].name} img={userInfo.nodes[value].name_img} id={userInfo.nodes[value].name_img}/>
        })
      }
      
    </div>
  );
}

export default Home;
