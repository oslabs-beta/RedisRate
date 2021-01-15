import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// download react-router-packages

const Login = ( ) => {

  const [port, setPort] = useState('')
  const [ipaddress, setIpaddress] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

  const onSubmit = (e: any) => {
    e.preventDefault();
    // send values in POST
    fetch('eventual endpoint to server', {
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
    <div id="loginPage">
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
      </div>
    </div>
  )
}

export default Login;