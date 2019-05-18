import React from "react";
import { connect } from "react-redux";

import { Grid, Button, Divider, TextField, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import {} from "../redux/action-creators";

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
            onChange={this.handleEventNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="select-calendar"
            select
            label="Select Notebook"
            value={this.props.currentNote.notebookId}
            onChange={this.handleEventCalendarChange}
            fullWidth
            margin="dense"
          >
            {this.props.calendars &&
              this.props.calendars.map(calendar => (
                <MenuItem key={calendar.id} value={calendar.id}>
                  {calendar.title}
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
            onChange={this.handleEventDescriptionChange}
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
            <Button color="secondary" variant="outlined">
              Delete
            </Button>
          </Grid>
          <Grid item container xs={8} spacing={8} justify="flex-end">
            <Grid item xs={3}>
              <Button>Cancel</Button>
            </Grid>
            <Grid item xs={3}>
              <Button color="primary" variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
  )(NoteEditor)
);
