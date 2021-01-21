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
import styles from './styles/styles.css';

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

      headers: {'Content-Type': 'Application/JSON'},
    })
    .then(response => response.json())
    .then((response) => {
        // set isUserLoggedIn to true
       
      //  const { login} = response.body;
      console.log('this be the body response' + JSON.stringify(response));
      if(login === true) setIsUserLoggedIn(true);
      if(login === false) console.log('Invalid Login');
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
          <div id="logo">Logo</div>
          <div>
            <form id='form' onSubmit={onSubmit}>
              <label>PORT</label>
              <input
                onChange={(e) => setPort(e.target.value)}
                name='port'
                defaultValue={port}
              ></input>
              <label>IP Address</label>
              <input
                onChange={(e) => setIpaddress(e.target.value)}
                name='ipaddress'
                value={ipaddress}
              ></input>
              <label>Username</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                name='username'
                value={username}
              ></input>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                value={password}
                type='password'
              ></input>
              <input type='submit' value='Submit'></input>
            </form>
            {/* <Test /> */}
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Login;
