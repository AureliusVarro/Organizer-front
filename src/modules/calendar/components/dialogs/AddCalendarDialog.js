import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AddCalendarDialog extends React.Component {
  handleCalendarTitleChange = title => {
    this.props.onTempCalendarUpdated({ title: title.target.value });
  };

  handleClose = () => {
    console.log("onClose");
    this.props.onToggleAddCalendarDialog();
  };

  handleAddEvent = () => {
    this.props.addCalendar(this.props.tempCalendar);
  };

  render() {
    return (
      <Dialog
        open={this.props.isOpenedAddCalendarDialog}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Calendar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="calendarName"
            label="Calendar Name"
            fullWidth
            value={this.props.tempCalendar.title}
            onChange={this.handleCalendarTitleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddEvent} color="primary">
            Add Calendar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
