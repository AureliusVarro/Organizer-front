import React from "react";

import { Grid, Button, TextField, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  notePaperGrid: {
    height: "100%"
  },
  indent: {
    marginLeft: "32px"
  }
});

class NoteEditor extends React.Component {
  handleTitleChange = name => {
    let updCurrentNote = this.props.currentNote;
    updCurrentNote.title = name.target.value;
    this.props.onCurrentNoteUpdated(updCurrentNote);
  };

  handleNotebookChange = name => {
    console.log("notebookId", name.target.value);
    let updCurrentNote = this.props.currentNote;
    updCurrentNote.notebookId = name.target.value;
    console.log("notebookId", updCurrentNote);
    this.props.onCurrentNoteUpdated(updCurrentNote);
  };

  handleDescriptionChange = name => {
    let updCurrentNote = this.props.currentNote;
    updCurrentNote.text = name.target.value;
    this.props.onCurrentNoteUpdated(updCurrentNote);
  };

  handleEditNote = () => {
    this.props.editNote(this.props.currentNote);
  };

  handleDeleteNote = () => {
    this.props.deleteNote(this.props.currentNote);
  };

  render() {
    return (
      <Grid container spacing={8} direction="column">
        <Grid item xs={12}>
          <TextField
            autoFocus
            margin="dense"
            id="note-name"
            label="Note Name"
            fullWidth
            value={this.props.currentNote.title}
            onChange={this.handleTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="select-notebook"
            select
            label="Select Notebook"
            value={this.props.currentNote.notebookId}
            onChange={this.handleNotebookChange}
            fullWidth
            margin="dense"
          >
            {this.props.notebooks &&
              this.props.notebooks.map(notebook => (
                <MenuItem key={notebook.id} value={notebook.id}>
                  {notebook.title}
                </MenuItem>
              ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="note-description"
            label="Note Description"
            placeholder="Description"
            multiline
            fullWidth
            margin="dense"
            rows={22}
            rowsMax={22}
            value={this.props.currentNote.text}
            onChange={this.handleDescriptionChange}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          spacing={16}
        >
          <Grid item xs={2}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={this.handleDeleteNote}
            >
              Delete
            </Button>
          </Grid>
          <Grid item container xs={8} spacing={8} justify="flex-end">
            <Grid item xs={3}>
              <Button>Cancel</Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                variant="contained"
                onClick={this.handleEditNote}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NoteEditor);
