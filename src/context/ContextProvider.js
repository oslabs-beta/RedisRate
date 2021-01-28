/*
  Create initial state for context provider,
  also saves information of context 
*/

import React, { Provider, useState } from 'react';
import AppContext from './index.ts';

// interface IProps {
//   children: React.ReactNode; 
// }


const ContextProvider = ({ children, ...props } /*: IProps*/) => {

  const [port, setPort] = useState('');
  const [ipaddress, setIpaddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverPassword, setServerPassword] = useState('');
  const [memoryData, setMemoryData] = useState({});
  const [isDbConnected, setIsDbConnected] = useState(false);
  const [page, setPage] = useState('home')
  
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
    isDbConnected,
    setIsDbConnected,
    page,
    setPage
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
