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

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
