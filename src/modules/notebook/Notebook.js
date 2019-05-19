import React from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import NoteEditor from "./components/NoteEditor";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  notePaperGrid: {
    height: "100%"
  }
});

class Notebook extends React.Component {
  handleSelectNote = (event, note) => {
    console.log("Note", note);
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

  render() {
    const {
      //Actions
      onCurrentNoteUpdated,
      editNote,
      deleteNote,
      //State
      classes,
      notebooks,
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
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">
              {this.props.currentNotebook
                ? this.props.currentNotebook.title
                : "Loading..."}
            </Typography>
            <Divider />
            {notes[0] ? (
              <List>
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
            ) : (
              <React.Fragment>
                <Typography>
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
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
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
