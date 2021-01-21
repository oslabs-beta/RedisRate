import React from 'react';
import Line from 'react-chartjs-2';

const state = {
    labels: ['Navi', 'Daeun', 'Matthew', 'Heidi', 'Luna', 'Goober', 'Pink'],
    datasets: [
      {
        label: 'Cache Me If You Can',
        fill : false,
        lineTension: 2.5,
        backgroundColor: '#ffb8b8',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 3,
        data: [50, 100, 75, 20, 100, 55, 35]
      }
    ]
  }

  export default class TheLine extends React.Component {
      render(){
          return(
              <div>
              <Line
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Gang Gang',
                        fontSize: 20
                    },
                    legend:{
                        display:true,
                        position:'left'
                    }
                }}
                />
              </div>
          );
      }
  }