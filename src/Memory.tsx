import React, { useState, useEffect, useContext } from 'react';
import ThePie from './pie_donut';
import './styles/styles.css';


/*
1. graphics: show totalMemory, memoryUsage
  - get the metrics from backend
    - by getting context
    = Prop drilling? from Login OR use ContextProvider.js for managing state
*/
const Memory = () => {
  return (
    <div>
      <h1 id="MemoryPageTitle">Redis Memory Usage:</h1>
      <ThePie />
    </div>
  );
};

export default Memory;