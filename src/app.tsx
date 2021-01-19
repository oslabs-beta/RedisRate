import React, { useContext } from 'react';
import ReactDom from 'react-dom';

import Graph from '../src/graph';
import TheLine from '../src/line_graph';
import ThePie from '../src/pie_donut';
import Login from './Login.jsx';
import ContextProvider from './context/ContextProvider';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
document.title = 'Redis Rate';

const App = () => {
  return (
    <div>
      <h1>Navi and Unnie HERE!</h1>
      {/* <Graph /> */}
      {/* <TheLine /> */}
      <ThePie />
      <Login />
    </div>
  );
};

ReactDom.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  mainElement
);
