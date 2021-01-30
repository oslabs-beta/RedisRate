import React, { useContext } from 'react';
import AppContext from '../context/index';
import { Bar } from 'react-chartjs-2';
import '../styles/styles.css';

const Memory = () => {

  const { 
    memoryData,
   } = useContext(AppContext);

  // convert string values returned from redisDB
  let totalMemory = memoryData.all;
  let usedMemory = memoryData.used;
  const tth = totalMemory[totalMemory.length - 1];
  const uth = usedMemory[usedMemory.length - 1];
  totalMemory.replace(tth, '');
  usedMemory.replace(uth, '');
  totalMemory = parseInt(totalMemory, 10);
  usedMemory = parseInt(usedMemory, 10);

  if (tth === 'M') {
    usedMemory = usedMemory / 10000;
  }

  const state = {
    labels: ['Total Memory', 'Used Memory'],
    datasets: [
      {
        label: 'Cache Me If You Can',
        backgroundColor: '#ffb8b8',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [totalMemory, usedMemory]
      }
    ]
  }
  

  return ( 
    <div>
      <h3>Memory Fragmentation Ratio: {memoryData.fragRatio}</h3>
      <h3>Evicted Keys: {memoryData.evictedKeys}</h3>
      <Bar
        data={state}
        options={{
          title:{
            display:true,
            text:'Memory Usage',
            fontSize:30
          },
          legend:{
            display:true,
            position:'bottom'
          }
        }}
      />
    </div>
  );

};

export default Memory;