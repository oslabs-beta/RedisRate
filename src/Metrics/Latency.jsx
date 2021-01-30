import React, { useState, useEffect, useContext } from 'react';
import '../styles/styles.css';
import { Bar } from 'react-chartjs-2';
import AppContext from '../context/index';

const Latency = () => {

  const { latencyData } = useContext(AppContext);

  const data = {
    labels: ['Operations per Second', 'Keyspace Hits', 'Keyspace Misses', 'Hit Rate', 'Total Connections'],
    datasets: [
      {
        label: 'Latency',
        data: [latencyData.opsPerSec, latencyData.keyspaceHits, latencyData.keyspaceMisses, latencyData.hitRate, latencyData.totalConnections],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }
  
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
    maintainAspectRatio: false
  }

  return (
    <div className='latency'>
        <Bar
        data={data}
        width={100}
        height={50}
        options={{options}}
        />
    </div>
  );
};

export default Latency;      