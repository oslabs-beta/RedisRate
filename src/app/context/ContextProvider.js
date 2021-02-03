/*
  React Context API used for state management
  Context object here hold state variables and methods
*/

import React, { Provider, useState } from 'react';
import AppContext from './index.ts';

const ContextProvider = ({ children }) => {

  const [port, setPort] = useState('');
  const [ipaddress, setIpaddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverPassword, setServerPassword] = useState('');
  const [memoryData, setMemoryData] = useState({});
  const [throughputData, setThroughputData] = useState({});
  const [latencyData, setLatencyData] = useState({});
  const [isDbConnected, setIsDbConnected] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn ] = useState(false);
  const [page, setPage] = useState('Home');
  
  const context = {
    setPort,
    port,
    setIpaddress,
    ipaddress,
    setFirstName,
    firstName,
    setLastName,
    lastName,
    setUsername,
    username,
    setPassword,
    password,
    setServerPassword,
    serverPassword,
    setMemoryData,
    memoryData,
    setThroughputData,
    throughputData,
    setLatencyData,
    latencyData,
    setIsDbConnected,
    isDbConnected,
    setPage,
    page,
    setIsUserLoggedIn,
    isUserLoggedIn,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
