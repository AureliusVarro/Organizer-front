import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DocumentTitle from 'react-document-title';
import blue from '@material-ui/core/colors/blue';
import withStyles from '@material-ui/core/styles/withStyles';
import Fade from '@material-ui/core/Fade';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { processingStatuses } from '../../common/constants/common';
import internalUrls from '../../common/constants/internal-urls';

const styles = theme => ({
  signUpPage: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    position: 'relative',
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  linearColorPrimary: {
    width: '100%',
    borderRadius: '9px',
    position: 'absolute',
    top: 0,
    backgroundColor: blue[100]
  },
  linearBarColorPrimary: {
    backgroundColor: blue[600]
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: blue[600]
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    backgroundColor: blue[600],
    marginTop: theme.spacing.unit * 3,
    '&:hover': {
      backgroundColor: blue[300]
    }
  }
});

class SignUpPage extends React.Component {
  state = {
    pending: false,
    showConfirmPassword: false,
    showPassword: false,
    confirmpassword: '',
    password: '',
    email: '',
    name: ''
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.registrationUserStatus !== nextProps.registrationUserStatus
    ) {
      if (nextProps.registrationUserStatus === processingStatuses.PENDING) {
        this.setState({ pending: true });
      }

      if (nextProps.registrationUserStatus === processingStatuses.FAILURE) {
        this.setState({ pending: false });
      }

      if (nextProps.registrationUserStatus === processingStatuses.SUCCESS) {
        this.props.history.push(internalUrls.SIGN_IN.path);
      }
    }
  }

  handleSubmit = event => {
    event.nativeEvent.preventDefault();

    if (this.state.email && this.state.password && this.state.name) {
      this.props.signUpUser({
        password: this.state.password,
        email: this.state.email,
        name: this.state.name
      });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(prevState => ({
      showConfirmPassword: !prevState.showConfirmPassword
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <DocumentTitle title={internalUrls.SIGN_UP.pageTitle}>
        <div className={classes.signUpPage}>
          <Paper className={classes.paper}>
            <Fade
              in={this.state.pending}
              style={{
                transitionDelay: this.state.pending ? '350ms' : '150ms'
              }}
              unmountOnExit
            >
              <LinearProgress
                classes={{
                  colorPrimary: classes.linearColorPrimary,
                  barColorPrimary: classes.linearBarColorPrimary
                }}
              />
            </Fade>

            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1">Sign up</Typography>

            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  disabled={this.state.pending}
                  value={this.state.email}
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleChange}
                />
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Full name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  disabled={this.state.pending}
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  disabled={this.state.pending}
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        disabled={this.state.pending}
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="confirmpassword">
                  Confirm password
                </InputLabel>
                <Input
                  id="confirmpassword"
                  name="confirmpassword"
                  disabled={this.state.pending}
                  type={this.state.showConfirmPassword ? 'text' : 'password'}
                  value={this.state.confirmpassword}
                  onChange={this.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        disabled={this.state.pending}
                        aria-label="Toggle confirmpassword visibility"
                        onClick={this.handleClickShowConfirmPassword}
                      >
                        {this.state.showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={this.state.pending}
                className={classes.submit}
              >
                Sign up
              </Button>
            </form>
          </Paper>
        </div>
      </DocumentTitle>
    );
  }
}

SignUpPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUpPage);
