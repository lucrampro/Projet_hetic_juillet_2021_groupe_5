import React from 'react';
// STYLES
import '../assets/styles/notification.scss';

const getArrayNotif = ["bin", "mailbox"];

const Notifications = () => (
  <>
    <div className="notification">
      <div className="notifications-title">
        {/* <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" /> */}
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
  </>
);

export default Notifications;