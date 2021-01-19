import React, { useState, useEffect, useContext } from 'react';
import AppContext from "./context/index";
import Test from './Test.jsx'

const Login = ( ) => {

  const {port, setPort} = useContext(AppContext);
  const {ipaddress, setIpaddress} = useContext(AppContext);
  const {username, setUsername} = useContext(AppContext);
  const {password, setPassword} = useContext(AppContext);
  

  const onSubmit = (e) => {
    e.preventDefault();
    // send values in POST
    fetch('/connect', {
      body: JSON.stringify({
        port,
        ipaddress,
        username,
        password
      }),
      method: 'POST',
      headers: {'Content-Type': 'Application/JSON'},
    })
    .then(response => {
      response.json();
      console.log('Sent user data to server:', response)
    })
    .catch(err => {
      console.log('could not send user info:', err)
    })
  }

  
  return(
    <div>
      <div>Logo</div>
      <div>
        <form onSubmit={onSubmit}>
          <label>PORT</label>
            <input
              onChange={e => setPort(e.target.value)}
              name="port" 
              defaultValue={port}></input>
          <label>IP Address</label>
            <input 
              onChange={e => setIpaddress(e.target.value)}
              name="ipaddress" 
              value={ipaddress}></input>
          <label>Username</label>
            <input 
              onChange={e => setUsername(e.target.value)}
              name="username" 
              value={username}></input>
          <label>Password</label>
            <input 
              onChange={e => setPassword(e.target.value)}
              name="password" 
              value={password}
              type="password"></input>
          <input type="submit" value="Submit"></input>
        </form>
        <Test />
      </div>
    </div>
  )
}

export default Login;