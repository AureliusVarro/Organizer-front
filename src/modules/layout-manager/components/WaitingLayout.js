import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  appBar: {
    backgroundColor: blue[600]
  },
  logoTypography: {
    flexGrow: 1,
    fontSize: '1.7em !important'
  },
  loading: {
    flexGrow: 1,
    padding: '0 0 10px 30px',
    fontSize: '1em !important'
  },
  linearColorPrimary: {
    width: '100%',
    borderRadius: '9px',
    position: 'absolute',
    top: 0,
    backgroundColor: blue[600]
  },
  linearBarColorPrimary: {
    backgroundColor: blue[100]
  }
});

const WaitingLayout = ({ children, classes }) => (
  <AppBar className={classes.appBar} position="static">
    <LinearProgress
      classes={{
        colorPrimary: classes.linearColorPrimary,
        barColorPrimary: classes.linearBarColorPrimary
      }}
    />
    <Toolbar>
      <Typography
        component="h6"
        color="inherit"
        className={classes.logoTypography}
      >
        The Organizer
      </Typography>
    </Toolbar>
    <Typography component="p" color="inherit" className={classes.loading}>
      Loading ...
    </Typography>
  </AppBar>
);

export default withStyles(styles)(WaitingLayout);
