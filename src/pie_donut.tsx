import { Pie, Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect, useContext } from 'react';
import AppContext from './context/index';

let totalMemory = 100;
let usedMemory = 65;

// grab the metrics from AppContext, these will have already been sent from backend
// const { memoryData, setMemoryData } = useContext(AppContext);
const state = {
  labels: ['Total Memory', 'Used Memory'],
  datasets: [
    {
      label: 'Cache Me If You Can',
      backgroundColor: ['#ffb8b8', '#cd84f1'],
      hoverBackgroundColor: ['#501800', '#ffu8b8'],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [totalMemory, usedMemory],
    },
  ],
};

const ThePie = () => {
  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: 'Total Memory',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: 'Used Memory',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default ThePie;