import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AddNotebookDialog extends React.Component {
  handleNotebookTitleChange = title => {
    this.props.onTempNotebookUpdated({ title: title.target.value });
  };

  handleClose = () => {
    console.log("onClose");
    this.props.onToggleAddNotebookDialog();
  };

  handleAddNotebook = () => {
    this.props.addNotebook(this.props.tempNotebook);
  };

  render() {
    return (
      <Dialog
        open={this.props.isOpenedAddNotebookDialog}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Notebook</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="notebookName"
            label="Notebook Name"
            fullWidth
            value={this.props.tempNotebook.title}
            onChange={this.handleNotebookTitleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddNotebook} color="primary">
            Add Notebook
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
