import React from 'react';
import '../assets/styles/header.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {

  const history = useHistory();
  const goToNotificationPage = () => {
    history.push(`/notifications`)
  }
  
  return (
    <header>
      <h1>SecuHome</h1>
      {/* <img src='/imgs/notification_icon.png' alt="" srcSet="" onClick={ goToNotificationPage}/> */}
    </header>
  );
}

export default Header;