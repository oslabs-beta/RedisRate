import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp.jsx';
import Connect from './Connect.jsx';
import Navigation from './Navigation.jsx';
import ContextProvider from './context/ContextProvider';
// import Home from './Home.jsx'
import Memory from './Metrics/Memory.jsx'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme ({
  palette: {
    primary : { 500: '#743854'},
    background : { default : 'linear-gradient(to right, tomato, cyan)'}
},
})

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
      </Switch>
    </div >
  );
};

ReactDom.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <React.StrictMode>
          <ContextProvider>
            <Router>
              <App />
            </Router>
          </ContextProvider>
        </React.StrictMode>
    </ThemeProvider>,
          mainElement
);
