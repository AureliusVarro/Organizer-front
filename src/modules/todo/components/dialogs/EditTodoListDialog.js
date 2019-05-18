import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class EditTodoListrDialog extends React.Component {
  handleTodoListTitleChange = title => {
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
      <Dialog
        open={this.props.isOpenedEditTodoListDialog}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit TodoList</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="todoListTitle"
            label="TodoList Title"
            fullWidth
            value={this.props.tempTodoList.title}
            onChange={this.handleTodoListTitleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDeleteTodoList} color="secondary">
            Delete
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleEditTodoList} color="primary">
            Edit TodoList
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
