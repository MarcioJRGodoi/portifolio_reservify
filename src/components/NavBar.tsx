import React from 'react';
import { AppBar, Toolbar, Typography, Button, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const theme = createTheme();

const useStyles = makeStyles(() => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface ElevationScrollProps {
  children: React.ReactElement;
  window?: () => Window;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "rgba(4,8,10, 1)" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
    },
  });
}

export const Navbar = () => {
  const classes = useStyles();

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img src={logo} alt="Reservify Logo" width={35} />
            <Typography variant="h6" color="white" noWrap>
              Reservify
            </Typography>
          </div>
          <div>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/pricing">Pricing</Button>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
