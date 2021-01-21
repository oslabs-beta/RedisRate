import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import ContextProvider from './context/ContextProvider';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
document.title = 'Redis Rate';

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

ReactDom.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  mainElement
);
