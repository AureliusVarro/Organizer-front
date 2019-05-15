import React from "react";
import { connect } from "react-redux";

import {
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  TextField,
  MenuItem
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import {} from "./redux/action-creators";

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
  },
  padding: {
    margin: "18px"
  }
});

class Notebook extends React.Component {
  handleSelectNote = note => {};

  render() {
    console.log(this.props.classes.padding);
    const editNoteWindow = (
      <div>
        <Grid container spacing={8} direction="column">
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Event Name"
              fullWidth
              value={this.props.currentNote.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="select-calendar"
              select
              label="Select Notebook"
              value={this.props.currentNote.notebookId}
              fullWidth
              margin="dense"
            >
              {this.props.notebooks.map(calendar => (
                <MenuItem key={calendar.id} value={calendar.id}>
                  {calendar.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="event-description"
              label="Event Description"
              placeholder="Descriptipn"
              multiline
              fullWidth
              margin="dense"
              value={this.props.currentNote.text}
            />
          </Grid>
        </Grid>
      </div>
    );
    return (
      <div className={classNames.notePaperGrid}>
        <Grid
          classes={classNames.notePaperGrid}
          container
          direction="row"
          spacing={24}
        >
          <Grid item xs={6}>
            <Paper className={this.props.classes.paper}>
              <Typography variant="h4">
                {this.props.currentNotebook
                  ? this.props.currentNotebook.title
                  : "Loading..."}
              </Typography>
              <Divider />
              {this.props.notes.map(item => (
                <div>
                  <Button
                    className={classNames.indent}
                    onClick={this.handleSelectNote(item)}
                  >
                    <Typography>{item.title}</Typography>
                  </Button>
                  <Divider />
                </div>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={this.props.classes.paper}>
              <Typography variant="h4">Edit Note</Typography>
              {this.props.notes[0] ? editNoteWindow : "Loading..."}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.notes
});

const mapDispatchToProps = {};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notebook)
);
