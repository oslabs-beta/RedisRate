import React, { useState, useEffect, useContext } from 'react';
import AppContext from './context/index';
import Memory from './Memory.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

import './styles/styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Connect = () => {

  let history = useHistory();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

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
        // set isUserLoggedIn to true

        const { login, allMemory, usedMemory } = response;
        setMemoryData({
          all: allMemory,
          used: usedMemory,
        })
        console.log('this be the memoryData:', memoryData)
        console.log('this be the body response' + JSON.stringify(response));
        if (login === true) {
          setIsUserLoggedIn(true);

        }
        if (login === false) console.log('Invalid Login');
      })

      .catch((err) => {
        console.log('could not send user info:', err);
      });
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push('/memory');
    }
  }, [isUserLoggedIn]);

  return (
    <Switch>
      <Route path='/memory'>
        <Memory />
      </Route>

      <Route path='/connect'>
        <div id='connectPage'>
          {/* <img src={require("/src/styles/assets/redisrate1.png")} width="200"></img> */}
          <div>
            <form id='form' onSubmit={onSubmit}>
              <TextField className="formElement" margin="normal" label="Port" variant="outlined" onChange={(e) => setPort(e.target.value)} />
              <TextField className="formElement" margin="normal" label="IP Address" variant="outlined" onChange={(e) => setIpaddress(e.target.value)} />
              <TextField className="formElement" margin="normal" type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
              <Button id='butt' variant='outlined' type='submit'>Submit</Button>
            </form>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Connect;
