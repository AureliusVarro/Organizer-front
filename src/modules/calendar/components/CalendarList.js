import React from "react";
import { connect } from "react-redux";

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
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  },
  list: {
    backgroundColor: theme.palette.background.paper
  }
});

class CalendarList extends React.Component {
  onCheckboxToggle = item => event => {
    item.isDisplayed = event.target.checked;
    this.props.editCalendar(item);
  };

  toggleEditCalendarDialog = item => event => {
    this.props.onTempCalendarUpdated({
      id: item.id,
      title: item.title,
      isDisplayed: item.isDisplayed
    });
    this.props.onToggleEditCalendarDialog();
  };

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.list}>
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
              onChange={this.onCheckboxToggle({
                id: item.id,
                title: item.title
              })}
              value="checked"
              color="primary"
            />
            <ListItemText className={classes.listItem} noWrap>
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
