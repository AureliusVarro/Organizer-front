import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

import { noop } from '../../../common/utils/base-helper';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles = theme => ({
  root: {
    width: '270px',
    display: 'flex',
    padding: '10px',
    margin: '10px',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    [theme.breakpoints.up('md')]: {
      minWidth: '270px',
      maxWidth: '270px'
    }
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.light
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

const NotificationItem = ({ id, classes, message, variant, onClose }) => {
  const Icon = variantIcon[variant];

  const onCloseNotification = () => {
    onClose(id);
  };

  return (
    <SnackbarContent
      className={classNames(classes[variant], classes.root)}
      aria-describedby={id}
      message={
        <span id={id} className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onCloseNotification}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
    />
  );
};

NotificationItem.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  message: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'default'])
    .isRequired
};

NotificationItem.defaultProps = {
  onClose: noop,
  variant: 'default',
  message: ''
};

export default withStyles(styles)(NotificationItem);
