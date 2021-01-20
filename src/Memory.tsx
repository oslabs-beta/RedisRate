import React, { useState, useEffect, useContext } from 'react';
import AppContext from './context/index';
import ThePie from './pie_donut';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/*
1. graphics: show totalMemory, memoryUsage
  - get the metrics from backend
    - by getting context
*/
const Memory = () => {
  return (
    <div>
      <ThePie />
    </div>
  );
};

export default Memory;