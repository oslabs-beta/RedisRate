import React, { useEffect, useContext } from 'react';
import AppContext from './context/index';
import { useHistory } from 'react-router-dom';

import './styles/styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Connect = () => {

  let history = useHistory();
  const { 
    isDbConnected, 
    setIsDbConnected,
    port,
    setPort,
    ipaddress, 
    setIpaddress,
    password,
    setPassword,
    setMemoryData,
    setLatencyData,
    setThroughputData,
  } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('/connect', {
      body: JSON.stringify({
        port,
        ipaddress,
        password,
      }),
      method: 'POST',

      headers: { 'Content-Type': 'Application/JSON' },
    })
      .then(response => response.json()) 
      .then((response) => {

        const { 
          login, 
          allMemory, 
          usedMemory, 
          memoryFragRatio, 
          evictedKeys,
          opsPerSec,
          keyspaceHits,
          keyspaceMisses,
          hitRate,
          totalCommands,
          totalConnections,
          connectedClients,
          connectedSlaves,
          blockedClients 
        } = response;
        
        // Save associated data in React Context state objects
        setMemoryData({
          all: allMemory,
          used: usedMemory,
          fragRatio: memoryFragRatio,
          evictedKeys: evictedKeys,
        })
        setLatencyData({
          opsPerSec: opsPerSec,
          keyspaceHits: keyspaceHits,
          keyspaceMisses: keyspaceMisses,
          hitRate: hitRate,
          totalConnections: totalConnections,
        })
        setThroughputData({
          connectedClients: connectedClients,
          connectedSlaves: connectedSlaves,
          blockedClients: blockedClients,
          totalCommands: totalCommands,
        }) 
        
        /* 
          Handle boolean to track user login status,
          this is linked to successful client connection with Redis
        */
        if (login) {
          setIsDbConnected(true);
        }
        if (!login) {
          setIsDbConnected(false);
          console.log('Invalid Login');
        }
      })
      .catch((err) => {
        console.log('could not send user info:', err);
      });
      
  };

  // Redirect user to navigation once they are authenticated
  useEffect(() => {
    if (isDbConnected) {
      history.push('/navigation');
    }
  }, [isDbConnected]);

  return (
    <div id='connectPage'>
      <div>
        <form id='form' onSubmit={onSubmit}>
          <TextField className="formElement" margin="normal" label="Port" variant="outlined" onChange={(e) => setPort(e.target.value)} />
          <TextField className="formElement" margin="normal" label="IP Address" variant="outlined" onChange={(e) => setIpaddress(e.target.value)} />
          <TextField className="formElement" margin="normal" type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          <Button id='butt' variant='outlined' type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
