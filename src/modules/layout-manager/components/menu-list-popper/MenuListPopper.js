import React from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { IconButton, Button, Popper, Fade, Paper } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";

const styles = theme => ({
  margin: { margin: 0 },
  containerPaper: {
    maxHeight: "80vh",
    maxWidth: "50vw",
    overflow: "auto"
  },
  menuListChevronOpen: {
    transform: "rotate(180deg)"
  },
  menuListChevronClosed: {
    transform: "rotate(0deg)"
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
    const id = open ? "menu-list-popper" : null;
    return (
      <div>
        <IconButton
          aria-describedby={id}
          aria-label="arrow"
          className={classes.margin}
          onClick={this.handleClick}
        >
          <ChevronRight
            className={
              open ? classes.menuListChevronOpen : classes.menuListChevronClosed
            }
            fontSize="small"
          />
        </IconButton>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="right-start"
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
