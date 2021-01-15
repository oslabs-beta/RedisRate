import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['Navi', 'Daeun', 'Matthew', 'Heidi', 'Luna', 'Goober', 'Pink'],
    datasets: [
      {
        label: 'Cache Me If You Can',
        backgroundColor: ['#ffb8b8', '#cd84f1', '#fffa65', '#7efff5', '#18dcff', '#7d5fff', '#4b4b4b'],
        hoverBackgroundColor: [
            '#501800', '#ffu8b8', '#175000', '#ffb8b8', '#35014F', '#ffb8b8', '#003350'
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [50, 100, 75, 43, 100, 55, 35]
      }
    ]
  }

  export default class ThePie extends React.Component {
    render() {
      return (
        <div>
          <Pie
            data={state}
            options={{
              title: {
                display: true,
                text: 'Gang Gang',
                fontSize:20
              },
              legend:{
                display: true,
                position: 'right'
              }
            }} 
            />
          <Doughnut
            data={state}
            options={{
              title: {
                display: true,
                text: 'Doughnut Gang',
                fontSize: 20
              },
              legend:{
                display: true,
                position: 'right'
              }
            }}
            />
        </div>      
      )
    }
  }