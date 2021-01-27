import React, { useState, useEffect, useContext } from 'react';
import './styles/styles.css';
import ThePie from './pie_donut.jsx';


/*
1. graphics: show totalMemory, memoryUsage
  - get the metrics from backendd
    - by getting context
    = Prop drilling? from Login OR use ContextProvider.js for managing state
*/
const Memory = () => {
  return (
    <div id='memoryPage'>
      <h1 id="MemoryPageTitle">Redis Memory Usage:</h1>
      <ThePie />
    </div>
  );
};

export default Memory;