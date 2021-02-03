import React, { useState, useEffect, useContext } from 'react';
import '../styles/styles.css';
import { Bar } from 'react-chartjs-2';
import AppContext from '../context/index';

const Latency = () => {

  const { 
    latencyData,
  } = useContext(AppContext);

  if (latencyData.keyspaceHits === null) {
    latencyData.keyspaceHits = 0;
  }

  const data1 = {
    labels: ['Activity'],
    datasets: [
      {
        label: 'Operations Per Second',
        data: [latencyData.opsPerSec],
        // data: [11],
        backgroundColor: [
          'rgba(255,143,229,1)',
        ],
        borderColor: [
          'rgba(0,0,0)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Total Connections',
        data: [latencyData.totalConnections],
        // data: [32],
        backgroundColor: [
          'rgba(255,89,144,1)'
        ],
        borderColor: [
          'rgba(0,0,0)'
        ],
        borderWidth: 1,
      } 
    ],
  }

  const data2 = {
    labels: ['Keyspace'],
    datasets: [
      {
        label: 'Keyspace Hits',
        data: [latencyData.keyspaceHits],
        // data: [47],
        backgroundColor: [
          'rgba(255,252,89,1)'
        ],
        borderColor: [
          'rgba(0,0,0)'
        ],
        borderWidth: 1,
      },
      {
        label: 'Keyspace Misses',
        data: [latencyData.keyspaceMisses],
        // data: [36],
        backgroundColor: [
          'rgba(186,255,89,1)'
        ],
        borderColor: [
          'rgba(0,0,0)'
        ],
        borderWidth: 1,
      },
      {
        label: 'Keyspace Hit Rate',
        data: [latencyData.hitRate],
        // data: [50],
        backgroundColor: [
          'rgba(89,255,227,1)'
        ],
        borderColor: [
          'rgba(0,0,0)'
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    legend: {
      display: true,
      position: 'bottom',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <div className='latency'>
        <Bar
        data={data1}
        width={100}
        height={50}
        options={{options}}
        />
        <Bar
        data={data2}
        width={100}
        height={50}
        options={{options}}
        />
    </div>
  );
};

export default Latency;      