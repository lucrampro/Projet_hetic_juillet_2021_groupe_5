import React from 'react';
import { useHistory } from "react-router-dom";
// STYLES
import '../assets/styles/notification.scss';

const Notifications = () => {

  const getArrayNotif = ["bin", "mailbox"];
  const history = useHistory();

  const goToPreviousPath = () => {
    history.goBack()
  }
// const gotoHallDetails = () => {

//   history.push(`/lieux-commun/${actually_hall}`)
// }

  return (
    <div className="notification">
      <div className="notifications-title">
        <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" id="arrow" onClick={ goToPreviousPath}/>
        <h3>Notifications</h3>
      </div>
      {
        getArrayNotif.map(function (elem) {
          return <div className="notifications-bloc">
            <h4>Boite aux lettre</h4>
            <h4>12:40</h4>
          </div>
        })

      }
      
    </div>
  );
}

export default Notifications;