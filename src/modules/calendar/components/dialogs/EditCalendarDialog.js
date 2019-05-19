import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class EditCalendarDialog extends React.Component {
  handleCalendarTitleChange = title => {
    let updTempCalendar = this.props.tempCalendar;
    updTempCalendar.title = title.target.value;
    this.props.onTempCalendarUpdated(updTempCalendar);
  };

  handleClose = () => {
    this.props.onToggleEditCalendarDialog();
  };

  handleEditCalendar = () => {
    this.props.editCalendar(this.props.tempCalendar);
  };

  handleDeleteCalendar = () => {
    this.props.deleteCalendar(this.props.tempCalendar);
  };

  render() {
    return (
      <Dialog
        open={this.props.isOpenedEditCalendarDialog}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Calendar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="calendarTitle"
            label="Calendar Title"
            fullWidth
            inputProps={{ maxLength: 25 }}
            value={this.props.tempCalendar.title}
            onChange={this.handleCalendarTitleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDeleteCalendar} color="secondary">
            Delete
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleEditCalendar} color="primary">
            Edit Calendar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
