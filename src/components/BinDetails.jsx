import React, {useEffect, useState} from 'react';
// STYLES
import '../assets/styles/details.scss'
import '../assets/styles/binDetails.scss'
// STORE
import { Doughnut } from 'react-chartjs-2';
// 
import { DetailsCard } from '../components'


const BinDetails = ({info_node}) => {
  
  const time_action = info_node._time;
  const [weight, setWeight] = useState(0); 

  useEffect(() => {
    setWeight(info_node._value);
  });

  

  let date_action = new Date(time_action).toLocaleDateString();
  const bin_weight = weight > 0 ? weight.toFixed() : 0;
  const dataBin = bin_weight*100/600

  const data = {
    labels: [`Remplissage poubelle ${dataBin}%`],
    datasets: [
      {
        label: '# of Votes',
        data: [dataBin, 100 - dataBin],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          
        ],
        borderColor: [
          'rgba(54, 162, 235, 0.2)',
          'white',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Poubelle remplie a {dataBin}%</h3>
      <div className="bin-harvest">
      <img src='/imgs/icons/icon-bin.png' alt="" srcSet="" className="bin-icon" />
      <div className="bin-text">
        <h4 className="bin-harvest-title">Nouvelle collecte</h4>
      <h4>{date_action}</h4>
      </div>
    </div>
    <h4>Détails</h4>
    <div className="bin-details">
        <div className="wrapper--details">
          <DetailsCard action_text={"Poubelle recuperer"} info_node={info_node}/>
        </div>
    </div>
    </div>
  );
}

export default BinDetails;
