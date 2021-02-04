import React, { useContext } from 'react';
import AppContext from '../context/index';
import { Pie, Bar } from 'react-chartjs-2';
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
  if (uth === 'M') {
    usedMemory = usedMemory / 1000;
  }
  if (uth === 'K') {
    usedMemory = usedMemory / 1000000
  }

  const pieData = {
    labels: ['Used Memory', 'Total Memory'],
    datasets: [
      {
        label: 'Used',
        backgroundColor: ['rgba(207,255,94,1)', 'rgba(61,252,255,1)'],
        borderColor: 'rgba(0,0,0)',
        borderWidth: 1,
        data: [usedMemory, totalMemory]
      },
    ]
  }

  return ( 
    <div>
      <h3>You are using {memoryData.used} out of {memoryData.all} available memory</h3>
      <div>
        <Pie data={pieData}/>
      </div>
      <h3>Memory fragmentation ratio: {memoryData.fragRatio}</h3>
      <h3>Evicted Keys: {memoryData.evictedKeys}</h3>
    </div>
  );
};

export default Memory;