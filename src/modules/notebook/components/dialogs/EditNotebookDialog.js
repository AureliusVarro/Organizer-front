import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class EditNotebookDialog extends React.Component {
  handleNotebookTitleChange = title => {
    let updTempNotebook = this.props.tempNotebook;
    updTempNotebook.title = title.target.value;
    this.props.onTempNotebookUpdated(updTempNotebook);
  };

  handleClose = () => {
    this.props.onToggleEditNotebookDialog();
  };

  handleEditNotebook = () => {
    this.props.editNotebook(this.props.tempNotebook);
  };

  handleDeleteNotebook = () => {
    this.props.deleteNotebook(this.props.tempNotebook);
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.isOpenedEditNotebookDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Notebook</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="notebookTitle"
              label="Notebook Title"
              fullWidth
              value={this.props.tempNotebook.title}
              onChange={this.handleNotebookTitleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDeleteNotebook} color="secondary">
              Delete
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleEditNotebook} color="primary">
              Edit Notebook
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
