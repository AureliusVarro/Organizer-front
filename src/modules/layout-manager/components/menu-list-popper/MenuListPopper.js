import React, { Children } from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Button, Popper, Fade, Paper } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";

const styles = theme => ({
  indent: {
    marginLeft: "32px"
  },
  margin: { margin: 0 },
  containerPaper: {
    maxHeight: "100vh",
    maxWidth: "50hv",
    overflow: "auto"
  }
});

class MenuListPopper extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
      open: !this.state.open
    });
  };

  toggleEditCalendarDialog = item => event => {
    this.props.onTempCalendarUpdated({ id: item.id, title: item.title });
    this.props.onToggleEditCalendarDialog();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? "simple-popper" : null;
    return (
      <div>
        <IconButton
          aria-describedby={id}
          aria-label="arrow"
          className={classes.margin}
          onClick={this.handleClick}
        >
          <ChevronRight className={classes.margin} fontSize="small" />
        </IconButton>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="right"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={classes.containerPaper}>
                {this.props.children}
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}
const mapDispatchToProps = {};

const mapStateToProps = state => ({
  ...state.calendars
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MenuListPopper));
