import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class EditTodoListrDialog extends React.Component {
  handlTodoListTitleChange = title => {
    let updTempTodoList = this.props.tempTodoList;
    updTempTodoList.title = title.target.value;
    this.props.onTempTodoListUpdated(updTempTodoList);
  };

  handleClose = () => {
    this.props.onToggleEditTodoListDialog();
  };

  handleEditTodoList = () => {
    this.props.editTodoList(this.props.tempTodoList);
  };

  handleDeleteTodoList = () => {
    this.props.deleteTodoList(this.props.tempTodoList);
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.isOpenedEditTodoListDialog}
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
              value={this.props.tempTodoList.title}
              onChange={this.handleTodoListTitleChange}
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
      </div>
    );
  }
}
