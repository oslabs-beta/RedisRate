import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from './context/index';

// material UI imports for navbar
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// components
import Memory from './Metrics/Memory.jsx';
import Home from './Home.jsx';
import Latency from './Metrics/Latency.jsx'
import Throughput from './Metrics/Throughput.jsx';


const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: 'transparent',
      boxShadow: 'none',
      background: 'opacity 0%',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      backgroundColor: 'transparent',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

const WhiteTextTypography = withStyles({
  root: {
    color: "white"
  }
})(Typography);

export default function Navigation() {

  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [page, setPage] = useState('Home');
  const { setIsDbConnected } = useContext(AppContext);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AppContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setIsUserLoggedIn(false)
    setIsDbConnected(false);
  }

  useEffect(() => {
    if (!isUserLoggedIn) {
      history.push('/');
    }
  }, [isUserLoggedIn]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <WhiteTextTypography variant="h6" noWrap>
            {page}
          </WhiteTextTypography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem onClick={() => setPage('Memory')} button key='Memory'>
            <ListItemText primary="Memory" />
          </ListItem>
          <ListItem onClick={() => setPage('Latency')} button key='Latency'>
            <ListItemText primary="Latency" />
          </ListItem>
          <ListItem onClick={() => setPage('Throughput')} button key='Throughput'>
            <ListItemText primary="Throughput" />
          </ListItem>
          <ListItem onClick={logout} button key='Log Out'>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}  />
        {
          {
            Home: <Home />,
            Memory: <Memory />,
            Latency: <Latency />,
            Throughput: <Throughput />
          }[page]
        }
      </main>
    </div>
  )
}
