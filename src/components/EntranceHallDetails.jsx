import React, {useContext,} from 'react';
import { useHistory } from "react-router-dom";
// STYLES
import { userInfoContext} from '../store'
import '../assets/styles/entranceHallDetails.scss'

const EntranceHallDetails = () => {

const {userInfo} = useContext(userInfoContext)

const history = useHistory();

const actually_hall = userInfo.nodes.entranceHall.name_img

const gotoHallDetails = () => {

  history.push(`/lieux-commun/${actually_hall}`)
}

  return (
    <div>
      <button onClick={gotoHallDetails} className="peripherique--menu" style={{ margin: "5%" }}>
        <img src='/imgs/icons/icon-bin.png' alt="" srcSet="" className="peripherique--img" />
        <p>Hall</p>
        <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" className="img--arrow" />
      </button>
      <button onClick={gotoHallDetails} className="peripherique--menu">
        <img src='/imgs/icons/Stair.png' alt="" srcSet="" className="peripherique--img" />
        <p>Escalier</p>
        <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" className="img--arrow" />
      </button>
    </div>
  );
}

export default EntranceHallDetails;
