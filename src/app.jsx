import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Connect from './Connect.jsx';
import Navigation from './Navigation.jsx';
import ContextProvider from './context/ContextProvider';
// import Home from './Home.jsx'
import Memory from './Metrics/Memory.jsx'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { colors } from '@material-ui/core';
// import palette from './palette';
// const useStyles = makeStyles(theme => ({
//   root : { backgroundColor : "pink",
// }
// }));

// const classes = useStyles();

const theme = createMuiTheme ({
  palette: {
    primary : { main: '#5bbd96', contrastText: '#fff'},
    secondary: { main: '#ffffff'},
    background : { paper : '#2e2e42', default : '#2e2e42'},
    text : { primary : '#FFFFFF', secondary: '#bdbbc7'},
    
  }
});

// const theBack = { background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' };


const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
document.title = 'Redis Rate';

const App = () => {
  return (
    <div >
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
    <ThemeProvider theme={theme} >
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
