import React from 'react';
// STYLES
import '../assets/styles/details.scss'
import '../assets/styles/binDetails.scss'
// STORE
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Remplissage poubelle'],
  datasets: [
    {
      label: '# of Votes',
      data: [80, 20],
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
      <h4 className="bin-harvest-title">Nouvelle collecte</h4>
      <h4>22/08/21</h4>
    </div>
    <h4>Détails</h4>
    <div className="bin-details"></div> 
  </>
);

export default BinDetails;