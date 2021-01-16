import React from 'react';
import ReactDom from 'react-dom';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <h1>
      This is RedisRate
    </h1>
  )
}

ReactDom.render(<App />, mainElement);