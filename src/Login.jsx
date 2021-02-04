import React, { useEffect, useContext } from 'react';
import AppContext from './context/index';
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
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AppContext);
  const { username, setUsername } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      body: JSON.stringify({
        username,
        password,
      }),
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
    })
      .then(response => response.json())
      .then(res => {
        // check status code of 200 ?
        if (res["isUserLoggedIn"]){
          setIsUserLoggedIn(true);
        } else alert("Username/Password are incorrect. Please try again, or Sign up Now!");
      })
      .catch(err => console.log('error username or password does not exist: ', err))
    }

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
          <div>
            <form id='loginform' onSubmit={onSubmit}>
              <TextField id="texts" className="formElement" margin="normal" label="Username" variant="outlined" required onChange={(e) => setUsername(e.target.value)} />
              <TextField id="texts" className="formElement" margin="normal" type="password" label="Password" variant="outlined" required onChange={(e) => setPassword(e.target.value)} />
              <Button id='loginbutt' variant='outlined' type='submit'>Login</Button>
              <Button id='loginbutt' variant='outlined' onClick={signUpNow}>Sign Up</Button>
            </form>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Login;
