import React from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import {
  onToggleEditCalendarDialog,
  onTempCalendarUpdated,
  getCalendars,
  editCalendar
} from "../redux/action-creators";

const styles = theme => ({
  indent: {
    marginLeft: "40px"
  },
  margin: { margin: 0 }
});

class CalendarList extends React.Component {
  state = {
    open: false
  };

  componentDidMount() {
    //this.props.getCalendars();
  }

  handleStuff = item => event => {
    item.isDisplayed = event.target.checked;
    this.props.editCalendar(item);
  };

  toggleEditCalendarDialog = item => event => {
    this.props.onTempCalendarUpdated({ id: item.id, title: item.title });
    this.props.onToggleEditCalendarDialog();
  };

  trimTitle = title => {
    if (title) {
      if (title.length <= 12) return title;
      else return title.substring(0, 10) + "...";
    } else return "NULL";
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.calendars.map((item, index) => (
          <div className={classes.indent} key={index}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.isDisplayed}
                    onChange={this.handleStuff({
                      id: item.id,
                      title: item.title
                    })}
                    value="checkedB"
                    color="primary"
                  />
                }
                label={this.trimTitle(item.title)}
              />
              <IconButton
                aria-label="Edit"
                className={classes.margin}
                onClick={this.toggleEditCalendarDialog(item)}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </FormGroup>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToggleEditCalendarDialog,
  onTempCalendarUpdated,
  getCalendars,
  editCalendar
};

const mapStateToProps = state => ({
  ...state.calendar
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CalendarList));
