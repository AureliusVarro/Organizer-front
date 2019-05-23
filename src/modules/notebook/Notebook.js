import React from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import NoteEditor from "./components/NoteEditor";

const styles = theme => ({
  paper: {
    margin: "0",
    padding: theme.spacing.unit * 2,
    maxHeight: "95%",
    height: "95%",
    color: theme.palette.text.secondary,
    overflow: "auto"
  },
  notePaperGrid: {
    maxHeight: "95vh",
    height: "95vh"
  }
});

class Notebook extends React.Component {
  handleSelectNote = (event, note) => {
    this.props.onCurrentNoteUpdated({
      id: note.id,
      title: note.title,
      notebookId: note.notebookId,
      text: note.text
    });
  };

  handleAddNote = () => {
    this.props.addNote({
      notebookId: this.props.currentNotebook.id,
      title: "New Note",
      text: "Text"
    });
  };

  handleAddNotebook = () => {
    this.props.onToggleAddNotebookDialog();
  };

  render() {
    const {
      //Actions
      onToggleAddNotebookDialog,
      onCurrentNoteUpdated,
      editNote,
      deleteNote,
      //State
      classes,
      notebooks,
      currentNotebook,
      notes,
      currentNote
    } = this.props;
    return (
      <Grid
        className={classes.notePaperGrid}
        container
        direction="row"
        spacing={24}
        alignItems="stretch"
      >
        <Grid item xs={6} className={classes.notePaperGrid}>
          <Paper className={classes.paper}>
            {notes[0] !== undefined && notes[0] !== null ? (
              <List
                subheader={
                  <ListSubheader>
                    <Typography variant="h4">
                      {currentNotebook
                        ? currentNotebook.title
                        : "No Notebook Selected"}
                    </Typography>
                    <Divider />
                  </ListSubheader>
                }
              >
                {notes.map(item => (
                  <ListItem
                    key={item.id}
                    button
                    selected={currentNote && currentNote.id === item.id}
                    onClick={event => this.handleSelectNote(event, item)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            ) : currentNotebook ? (
              <React.Fragment>
                <Typography variant="h4">
                  {currentNotebook
                    ? currentNotebook.title
                    : "No Notebook Selected"}
                </Typography>
                <Divider />
                <Typography variant="h6">
                  {"You don't hane any notes in this notebook"}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleAddNote}
                >
                  Create a note?
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography variant="h5">
                  {"You don't hane any notebooks"}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleAddNotebook}
                >
                  Create a notebook?
                </Button>
              </React.Fragment>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.notePaperGrid}>
          <Paper className={this.props.classes.paper}>
            <Typography variant="h4">Edit Note</Typography>
            {currentNote ? (
              <NoteEditor
                onCurrentNoteUpdated={onCurrentNoteUpdated}
                editNote={editNote}
                deleteNote={deleteNote}
                notebooks={notebooks}
                currentNote={currentNote}
              />
            ) : (
              "No note selected"
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Notebook);
