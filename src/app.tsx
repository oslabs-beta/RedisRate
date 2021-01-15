import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login'

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <div><Login /></div>
  )
}

ReactDom.render(<App />, mainElement);