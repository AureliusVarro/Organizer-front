import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, MenuItem } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";

import {
  onToggleAddEventDialog,
  onTempEventUpdated,
  addEvent
} from "../../redux/action-creators";

class EditEventDialog extends React.Component {
  state = {
    open: false
  };

  handleDateChange = date => {
    let updTempEvent = this.props.tempEvent;
    let tempStart = updTempEvent.start;
    let tempEnd = updTempEvent.end;

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    tempStart.setFullYear(year, month, day);
    tempEnd.setFullYear(year, month, day);

    updTempEvent.startDate = tempStart.toISOString();
    updTempEvent.endDate = tempEnd.toISOString();

    this.props.onTempEventUpdated(updTempEvent);
  };

  getCalendarsList = () => {
    let calendarsList = [];
    this.props.calendars.map(item => {
      calendarsList.add(item.title);
    });
  };

  handleStartTimeChange = date => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.startDate = date.toISOString();
    this.props.onTempEventUpdated(updTempEvent);
  };

  handleEndTimeChange = date => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.endDate = date.toISOString();
    this.props.onTempEventUpdated(updTempEvent);
  };

  handleEventNameChange = name => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.title = name.target.value;
    this.props.onTempEventUpdated(updTempEvent);
  };

  handleEventCalendarChange = calendar => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.calendarId = calendar.target.value;
    this.props.onTempEventUpdated(updTempEvent);
  };

  handleEventDescriptionChange = desc => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.description = desc.target.value;
    this.props.onTempEventUpdated(updTempEvent);
  };

  handleClose = () => {
    this.props.onTempEventUpdated(null);
    this.props.onToggleAddEventDialog();
  };

  handleAddEvent = () => {
    this.props.addEvent(this.props.tempEvent);
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.isOpenedAddEventDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Event</DialogTitle>
          <DialogContent>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container spacing={8} direction="column">
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Event Name"
                    fullWidth
                    value={this.props.tempEvent.title}
                    onChange={this.handleEventNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="select-calendar"
                    select
                    label="Select Calendar"
                    value={this.props.tempEvent.calendarId}
                    onChange={this.handleEventCalendarChange}
                    fullWidth
                    margin="dense"
                  >
                    {this.props.calendars.map(calendar => (
                      <MenuItem key={calendar.id} value={calendar.id}>
                        {calendar.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <DatePicker
                    margin="normal"
                    label="Event Date"
                    value={this.props.tempEvent.start}
                    onChange={this.handleDateChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <TimePicker
                        margin="normal"
                        label="Start Time"
                        value={this.props.tempEvent.start}
                        onChange={this.handleStartTimeChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TimePicker
                        margin="normal"
                        label="End Time"
                        value={this.props.tempEvent.end}
                        onChange={this.handleEndTimeChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="event-description"
                    label="Event Description"
                    placeholder="Descriptipn"
                    multiline
                    fullWidth
                    margin="dense"
                    value={this.props.tempEvent.description}
                    onChange={this.handleEventDescriptionChange}
                  />
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAddEvent} color="primary">
              Add Event
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToggleAddEventDialog,
  onTempEventUpdated,
  addEvent
};

const mapStateToProps = state => ({
  ...state.calendar
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEventDialog);
