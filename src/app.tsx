import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp.jsx';
import Connect from './Connect.jsx';
import Navigation from './Navigation.jsx';
import ContextProvider from './context/ContextProvider';
// import Home from './Home.jsx'
import Memory from './Memory.jsx'

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
document.title = 'Redis Rate';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/connect'>
          <Connect />
        </Route>
        <Route exact path='/navigation'>
          <Navigation />
        </Route>
        <Route exact path='/memory'>
          <Memory />
        </Route>
      </Switch>
    </div >
  );
};

ReactDom.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  mainElement
);
