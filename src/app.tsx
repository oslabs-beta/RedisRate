import React from 'react';
import ReactDom from 'react-dom';
import Graph from '../src/graph';
import TheLine from '../src/line_graph';
import ThePie from '../src/pie_donut';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
document.title = 'Redis Rate';

const App = () => {
  return (
    <div>
      <h1>
        Navi and Unnie HERE!
      </h1>
    <Graph />
    {/* <TheLine /> */}
    <ThePie />
    </div>
  )
}

ReactDom.render(<App />, mainElement);