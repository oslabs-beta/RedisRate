import React, { useState, useEffect, useContext } from 'react';
import AppContext from './context/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';

import './styles/styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Navigation from './Navigation.jsx';


const Connect = () => {

  let history = useHistory();
  const { isDbConnected, setIsDbConnected } = useContext(AppContext);

  const { port, setPort } = useContext(AppContext);
  const { ipaddress, setIpaddress } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);
  const { memoryData, setMemoryData } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    // send values in POST
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

        const { login, allMemory, usedMemory } = response;
        setMemoryData({
          all: allMemory,
          used: usedMemory,
        })
        console.log('this be the memoryData:', memoryData)
        console.log('this be the body response' + JSON.stringify(response));
        if (login === true) {
          setIsDbConnected(true);
          console.log(`isDBLogged in for the true: ${isDbConnected}`);

        }
        if (login === false) {
          setIsDbConnected(false);
          console.log(`isDBLogged in for the false: ${isDbConnected}`);

          console.log('Invalid Login');
        }
      })

      .catch((err) => {
        console.log('could not send user info:', err);
      });
  };

  useEffect(() => {
    if (isDbConnected) {
      history.push('/navigation');
    }
  }, [isDbConnected]);

  return (

    < div id='connectPage' >
      {/* <img src={require("/src/styles/assets/redisrate1.png")} width="200"></img> */}
      < div >
        <form id='form' onSubmit={onSubmit}>
          <TextField className="formElement" margin="normal" label="Port" variant="outlined" onChange={(e) => setPort(e.target.value)} />
          <TextField className="formElement" margin="normal" label="IP Address" variant="outlined" onChange={(e) => setIpaddress(e.target.value)} />
          <TextField className="formElement" margin="normal" type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          <Button id='butt' variant='outlined' type='submit'>Submit</Button>
        </form>
      </div >
    </div >
  );
};

export default Connect;
