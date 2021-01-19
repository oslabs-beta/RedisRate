import React from 'react';
import axios from 'axios';
import {Pie, Doughnut} from 'react-chartjs-2';

let totalMemory = 100;
let usedMemory = 65;

const state = {
    labels: [ 'Total Memory', 'Used Memory'],
    datasets: [
      {
        label: 'Cache Me If You Can',
        backgroundColor: ['#ffb8b8', '#cd84f1'],
        hoverBackgroundColor: [
            '#501800', '#ffu8b8'
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [totalMemory, usedMemory]
      }
    ]
  }

  export default class ThePie extends React.Component {

    // componentDidMount(){
    //   fetch('https://localhost:3000')
    //     .then(res => res.JSON())
    //     .then(data => this.setState({
    //       data : data
    //     }));
    //   }

      componentDidMount(){
        fetch('https://localhost:3000')
          .then(res => res.json())
          .then(data => {
            state.datasets[0].data[totalMemory] = data.body['1'],
            usedMemory = data.body['2']
          }
          )
        }
    

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