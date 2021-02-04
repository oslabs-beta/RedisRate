import React, { useContext } from 'react';
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