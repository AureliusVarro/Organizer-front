import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AddTodoListDialog extends React.Component {
  handleTodoListTitleChange = title => {
    this.props.onTempTodoListUpdated({ title: title.target.value });
  };

  handleClose = () => {
    console.log("onClose");
    this.props.onToggleAddTodoListDialog();
  };

  handleAddTodoList = () => {
    this.props.addTodoList(this.props.tempTodoList);
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.isOpenedAddTodoListDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Todo List</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="calendarName"
              label="Todo List Name"
              fullWidth
              value={this.props.tempTodoList.title}
              onChange={this.handleTodoListTitleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAddTodoList} color="primary">
              Add Todo List
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
