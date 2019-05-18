import React from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
  Button
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import {
  onToggleEditCalendarDialog,
  onToggleAddCalendarDialog,
  onTempCalendarUpdated,
  getCalendars,
  editCalendar
} from "../redux/action-creators";

const styles = theme => ({
  indent: {
    marginLeft: "32px"
  },
  margin: { margin: 0 },
  listHeaderButton: {},
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

class CalendarList extends React.Component {
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

  handleStuff = item => event => {
    item.isDisplayed = event.target.checked;
    this.props.editCalendar(item);
  };

  toggleEditCalendarDialog = item => event => {
    console.log(1);
    this.props.onTempCalendarUpdated({ id: item.id, title: item.title });
    this.props.onToggleEditCalendarDialog();
  };

  trimTitle = title => {
    if (title) {
      if (title.length <= 10) return title;
      else return title.substring(0, 10) + "...";
    } else return "NULL";
  };

  render() {
    const { classes } = this.props;
    return (
      <List>
        <ListSubheader>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.props.onToggleAddCalendarDialog}
          >
            <AddIcon />
            Calendar
          </Button>
        </ListSubheader>
        {this.props.calendars.map((item, index) => (
          <ListItem key={index}>
            <Checkbox
              className={classes.listItem}
              checked={item.isDisplayed}
              onChange={this.handleStuff({
                id: item.id,
                title: item.title
              })}
              value="checkedB"
              color="primary"
            />
            <ListItemText className={classes.listItem}>
              {item.title}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Edit"
                className={classes.margin}
                onClick={this.toggleEditCalendarDialog(item)}
              >
                <EditIcon className={classes.margin} fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapDispatchToProps = {
  onToggleEditCalendarDialog,
  onToggleAddCalendarDialog,
  onTempCalendarUpdated,
  getCalendars,
  editCalendar
};

const mapStateToProps = state => ({
  ...state.calendars
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CalendarList));
