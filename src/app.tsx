
import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import Login from './Login.jsx';
import ContextProvider from './context/ContextProvider';


const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {

  return (
    <div>
      <Login />
    </div>
  )
}

ReactDom.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>, 
  mainElement
);

