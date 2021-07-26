import React, {useContext, useEffect} from 'react';
// STORE
import { userInfoContext} from '../store'
// ASSETS
import '../assets/styles/home.scss';
import notif_icon from '../assets/imgs/notification_icon.png';
// COMPONENTS
import {PeripheriqueCard} from '../components'

const Home = () => {

  const {userInfo} = useContext(userInfoContext)

  useEffect(() => {
    console.log(userInfo);
    
  }, [userInfo]);
  return (
    <div className="home">
      <header>
        <h1>SecuHome</h1>
        <img src={notif_icon} alt="" srcSet=""/>
      </header>
      <p>Mes objets connectés</p>
      <PeripheriqueCard />
    </div>
  );
}

export default Home;
