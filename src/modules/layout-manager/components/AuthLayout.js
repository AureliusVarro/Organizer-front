import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import internalUrls from '../../../common/constants/internal-urls';

const styles = theme => ({
  rootLayout: {
    overflow: 'hidden',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column'
  },
  appBar: {
    backgroundColor: blue[600]
  },
  logoTypography: {
    flexGrow: 1,
    fontSize: '1.7em !important'
  },
  authNavBtn: {
    margin: '10px',
    '&.active': {
      border: '1px solid #fff'
    }
  }
});

const AuthLayout = ({ children, classes }) => (
  <div className={classes.rootLayout}>
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          className={classes.logoTypography}
        >
          The Organizer
        </Typography>

        <Button
          color="inherit"
          className={classes.authNavBtn}
          component={NavLink}
          to={internalUrls.SIGN_IN.path}
        >
          {internalUrls.SIGN_IN.linkTitle}
        </Button>
        <Button
          color="inherit"
          className={classes.authNavBtn}
          component={NavLink}
          to={internalUrls.SIGN_UP.path}
        >
          {internalUrls.SIGN_UP.linkTitle}
        </Button>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

export default withStyles(styles)(AuthLayout);
