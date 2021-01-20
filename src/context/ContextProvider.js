/*
  Create initial state for context provider
*/

import React, { useState } from "react";
import AppContext from './index.js'

const ContextProvider = ({ children }) => {

  const [port, setPort] = useState('');
  const [ipaddress, setIpaddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const context = {
    setPort,
    port,
    setIpaddress,
    ipaddress,
    setUsername,
    username,
    setPassword,
    password,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;