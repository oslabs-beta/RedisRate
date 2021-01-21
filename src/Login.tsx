import React, { useState, useEffect, useContext } from 'react';
import AppContext from './context/index';
import Memory from './Memory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

import './styles/styles.css';
import TextField from '@material-ui/core/TextField';


const Login = () => {

  let history = useHistory();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const { port, setPort } = useContext(AppContext);
  const { ipaddress, setIpaddress } = useContext(AppContext);
  const { username, setUsername } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    // send values in POST
    fetch('/connect', {
      body: JSON.stringify({
        port,
        ipaddress,
        username,
        password,
      }),
      method: 'POST',

      headers: { 'Content-Type': 'Application/JSON' },
    })
      .then((response) => {
        // set isUserLoggedIn to true
        setIsUserLoggedIn(true);
        console.log('Sent user data to server:', response);
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

      <Route path='/'>
        <div id='loginPage'>
          {/*<img src="/src/styles/assets/redisLogo.webp" width="200"></img>*/}
          <div id="logo">Redis Rate</div>
          <div>
            <form id='form' onSubmit={onSubmit}>
              <TextField className="formElement" margin="normal" label="Port" variant="outlined" onChange={(e) => setPort(e.target.value)} />
              <TextField className="formElement" margin="normal" label="IP Address" variant="outlined" onChange={(e) => setIpaddress(e.target.value)} />
              <TextField className="formElement" margin="normal" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
              <TextField className="formElement" margin="normal" type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
              <input type='submit' value='Submit'></input>
            </form>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Login;
