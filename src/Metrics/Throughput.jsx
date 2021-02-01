import React, { useContext } from 'react';
import AppContext from '../context/index';
import { Bar } from 'react-chartjs-2';
import '../styles/styles.css';

const Throughput = () => {

  const { 
    throughputData,
  } = useContext(AppContext);

  const state = {
    labels: ['Throughput'],
    datasets: [
      {
        label: 'Connected Clients',
        backgroundColor: '#ffb8b8',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [throughputData.connectedClients]
      },
      {
        label: 'Connected Replicas',
        backgroundColor: '#ffb8b8',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [throughputData.connectedSlaves]
      },
      {
        label: 'Blocked Clients',
        backgroundColor: '#ffb8b8',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [throughputData.blockedClients]
      }
    ]
  }

  return (
    <div id="throughputPage">
      <h3>Total Commands Processed: {throughputData.totalCommands}</h3>
      <Bar
        data={state}
        options={{
          title:{
            display:true,
            text:'Database Connections',
            fontSize:30
          },
          legend:{
            display:true,
            position:'bottom'
          }
        }}
      />
    </div>
  )
}

export default Throughput;