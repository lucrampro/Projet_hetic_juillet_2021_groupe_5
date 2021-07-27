import React, {useContext, useEffect, useState} from 'react';
import { Bar } from 'react-chartjs-2';
import Axios from 'axios'
// STYLES
import '../assets/styles/barChart.scss'
import { useHistory } from 'react-router-dom'
import { userInfoContext} from '../store'

const BarChart = () => {

const {userInfo} = useContext(userInfoContext)
const node = userInfo.nodes.entranceHall

const [frequentation_value, setFrequentation_value] = useState(0);

const getDataNode = () => {
  Axios.get(`http://localhost:3001/influx/${node.route}`)
  .then(response => setFrequentation_value(response.data.data_value))
  .catch(error => console.error(error))
}

useEffect(() => getDataNode() );

const data = {
  labels: ['lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  datasets: [
    {
      label: 'Personnes',
      data: [frequentation_value, 0, 0, 0, 0, 0],
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



