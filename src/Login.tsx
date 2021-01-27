import React, { useState, useEffect, useContext } from 'react';
import AppContext from './context/index';
import SignUp from './SignUp.jsx';
import Connect from './Connect.jsx';
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


const Login = () => {

  let history = useHistory();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const { port, setPort } = useContext(AppContext);
  const { ipaddress, setIpaddress } = useContext(AppContext);
  const { username, setUsername } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);
  const { memoryData, setMemoryData } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  function signUpNow() {
    history.push('/signup');
  }

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push('/connect');
    }
  }, [isUserLoggedIn]);

  return (
    <Switch>
      <Route path='/connect'>
        <Connect />
      </Route>

      <Route exact path='/'>
        <div id='loginPage'>
          <img src={require("/src/styles/assets/redisrate1.png")} width="200"></img>
          {/* <div id="logo">Redis Rate</div> */}
          <div>
            <form id='form' onSubmit={onSubmit}>
              {/* <TextField className="formElement" margin="normal" label="Port" variant="outlined" onChange={(e) => setPort(e.target.value)} />
              <TextField className="formElement" margin="normal" label="IP Address" variant="outlined" onChange={(e) => setIpaddress(e.target.value)} /> */}
              <TextField className="formElement" margin="normal" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
              <TextField className="formElement" margin="normal" type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
              <Button id='butt' variant='outlined' type='submit'>Login</Button>
            </form>
            <Button id='butt' variant='outlined' onClick={signUpNow}>Sign Up</Button>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Login;
