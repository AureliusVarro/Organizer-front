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

export default class EditEventDialog extends React.Component {
  handleDateChange = newDate => {
    let date = new Date(newDate);
    let updTempEvent = this.props.tempEvent;
    let tempStart = new Date(updTempEvent.start);
    let tempEnd = new Date(updTempEvent.end);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    tempStart.setFullYear(year, month, day);
    tempEnd.setFullYear(year, month, day);

    updTempEvent.start = tempStart.toISOString();
    updTempEvent.end = tempEnd.toISOString();

    this.props.onTempEventUpdated(updTempEvent);
  };

  getCalendarsList = () => {
    let calendarsList = [];
    this.props.calendars.map(item => {
      calendarsList.add(item.title);
    });
  };

  handleStartTimeChange = date => {
    console.log("handleStartTimeChange", date);
    let updTempEvent = this.props.tempEvent;
    updTempEvent.start = date;
    this.props.onTempEventUpdated(updTempEvent);
  };

  handleEndTimeChange = date => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.end = date;
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
    this.props.onToggleEditEventDialog();
  };

  handleEditEvent = () => {
    this.props.editEvent(this.props.tempEvent);
  };

  handleDeleteEvent = () => {
    this.props.deleteEvent(this.props.tempEvent);
  };

  render() {
    const { isOpenedEditEventDialog, tempEvent, calendars } = this.props;
    return (
      <Dialog
        open={isOpenedEditEventDialog}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Event</DialogTitle>
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
                  value={tempEvent.title}
                  onChange={this.handleEventNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="select-calendar"
                  select
                  label="Select Calendar"
                  value={tempEvent.calendarId}
                  onChange={this.handleEventCalendarChange}
                  fullWidth
                  margin="dense"
                >
                  {calendars.map(calendar => (
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
                  value={tempEvent.start}
                  onChange={this.handleDateChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={24}>
                  <Grid item xs={4}>
                    <TimePicker
                      margin="normal"
                      label="Start Time"
                      value={tempEvent.start}
                      ampm={false}
                      onChange={this.handleStartTimeChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TimePicker
                      margin="normal"
                      label="End Time"
                      value={tempEvent.end}
                      ampm={false}
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
                  value={tempEvent.description}
                  onChange={this.handleEventDescriptionChange}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDeleteEvent} color="secondary">
            Delete
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleEditEvent} color="primary">
            Edit Calendar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
