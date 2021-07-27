import React from 'react';
import { Bar } from 'react-chartjs-2';
// STYLES
import '../assets/styles/barChart.scss'

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

const BarChart = () => (
  <>
    <div className="details--barchart">
      <img src='/imgs/icons/arrow-back.png' alt="" srcSet="" id="arrow" />
      <h3>Hall</h3>
    </div>
    <Bar data={data} options={options}  className="barchart"/>
  </>
);

export default BarChart;


