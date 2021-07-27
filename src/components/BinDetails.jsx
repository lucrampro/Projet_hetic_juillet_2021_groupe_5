import React from 'react';
// STYLES
import '../assets/styles/details.scss'
import '../assets/styles/binDetails.scss'
// STORE
import { Doughnut } from 'react-chartjs-2';

const dataBin = 80

const dataArray = ["test", "test"]

const data = {
  labels: [`Remplissage poubelle ${dataBin}%`],
  datasets: [
    {
      label: '# of Votes',
      data: [dataBin, 20],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'white',
      ],
      borderColor: [
        'rgba(54, 162, 235, 0.2)',
        'white',
      ],
      borderWidth: 1,
    },
  ],
};

const BinDetails = () => (
  <>
    <Doughnut data={data} />
    <div className="bin-harvest">
      <img src='/imgs/icons/icon-bin.png' alt="" srcSet="" className="bin-icon" />
      <div>
        <h4 className="bin-harvest-title">Nouvelle collecte</h4>
        <h4>22/08/21</h4>
      </div>
    </div>
    <h4>Détails</h4>
    <div className="bin-details">
      {
        dataArray.map((item, i) => <div key={i} className="bin-details_content">
          {/* <h3 className="bin-text">{ new Date().toLocaleString() }</h3> */}
          <div className="bin-text flex">
            <p className="text">Collecte poubelle</p> 
            <p>{ new Date().toLocaleString() }</p>
          </div>
        </div>)
      }
    </div>
  </>
);

export default BinDetails;