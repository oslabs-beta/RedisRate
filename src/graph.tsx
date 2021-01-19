import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Navi', 'Daeun', 'Matthew', 'Heidi', 'Luna', 'Goober', 'Pink'],
  datasets: [
    {
      label: 'Cache Me If You Can',
      backgroundColor: '#ffb8b8',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [50, 100, 75, 43, 100, 55, 35]
    }
  ]
}

export default class Graph extends React.Component {
  render() {
    return (
      <div>
      <Bar
        data={state}
        options={{
          title:{
            display:true,
            text:'Gang Gang',
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
}