/*
  Create initial state for context provider,
  also saves information of context 
*/

import React, { useState } from 'react';
import AppContext from './index.js';

const ContextProvider = ({ children }) => {
  const [port, setPort] = useState('');
  const [ipaddress, setIpaddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [memoryData, setMemoryData] = useState({});
  const context = {
    setPort,
    port,
    setIpaddress,
    ipaddress,
    setUsername,
    username,
    setPassword,
    password,
    setMemoryData,
    memoryData
  };
// add more context for usedMemory and totalMemory then make the 
// Memory subscibe to it.

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
