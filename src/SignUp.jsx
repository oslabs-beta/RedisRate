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


const SignUp = () => {

  let history = useHistory();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const { firstName, setFirstname } = useContext(AppContext);
  const { lastName, setLastname } = useContext(AppContext);
  const { username, setUsername } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
    }

  useEffect(() => {
      if(isUserLoggedIn) {
          history.push('/navigation'); //later, change this to general page
      }
  }, [isUserLoggedIn]);

  return (
      <Switch>
        <Route path='/signup'>
          <div id='signup'>
          <form id='signupForm' onSubmit={onSubmit}>
            <TextField className='formElement' margin='normal' label='firstName' onChange={(e) => setFirstname(e.target.value)} />
            <TextField className='formElement' margin='normal' label='lastName' onChange={(e) => setLastname(e.target.value)} />
            <TextField className='formElement' margin='normal' label='Username' onChange={(e) => setUsername(e.target.value)} />
            <TextField className='formElement' margin='normal' label='Password' onChange={(e) => setPassword(e.target.value)} />
            <Button id='signupButt' type='submit' variant='outlined'>Signup</Button>
          </form>
          </div>
        </Route>

        <Route path='/memory'>
          <Memory />
        </Route>
    </Switch>

  );
}

export default SignUp;













































































































































