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

  const [DBInfo, setDBInfo] = useState({
    port: '',
    ipaddress: '',
    username: '',
    password: ''
  })

  const onChange = (e) => {
    e.preventDefault();
    const { port, ipaddress, username, password } = e.target;
    setDBInfo({
      port,
      ipaddress,
      username,
      password
    })
    console.log(DBInfo)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('in submit')
    // const { port, ipaddress, username, password } = e.target.value;
   console.log(e.target.value)
  }

  

  return(
    <div id="loginPage">
      <div>Logo</div>
      <div>
        <form onSubmit={onSubmit}>
          <label>PORT</label>
            <input
              onChange={onChange}
              name="port" 
              value={DBInfo.port}></input>
          <label>IP Address</label>
            <input 
              onChange={onChange}
              name="ipaddress" 
              value={DBInfo.ipaddress}></input>
          <label>Username</label>
            <input 
              onChange={onChange}
              name="username" 
              value={DBInfo.username}></input>
          <label>Password</label>
            <input 
              onChange={onChange}
              name="password" 
              value={DBInfo.password}
              type="password"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}

export default Login;