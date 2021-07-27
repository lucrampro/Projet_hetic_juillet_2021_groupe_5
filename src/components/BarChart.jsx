import React from 'react';
import { Bar } from 'react-chartjs-2';
// STYLES
import '../assets/styles/barChart.scss'
import { useHistory } from 'react-router-dom'

const BarChart = () => {
// MODIFICATION VIA LES CAPTEURS
let dataInfluxDb = 9

const data = {
  labels: ['lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  datasets: [
    {
      label: 'Personnes',
      data: [dataInfluxDb, 0, 0, 0, 0, 0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',// GOOD
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

  const history = useHistory();
  const goToPreviousPath = () => {
    history.goBack()
  }

  return (
    <>
      <div className="details--barchart">
        <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" id="arrow" onClick={ goToPreviousPath }/>
        <h3>Hall</h3>
      </div>
      <Bar data={data} options={options} className="barchart"/>
    </>
  );
}

export default BarChart;



