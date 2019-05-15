import React from "react";
import { connect } from "react-redux";

import {
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

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
    <div>
      <Grid container spacing={8} direction="column">
        <Grid item xs={12}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event Name"
            fullWidth
            value={this.props.tempEvent.title}
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
            {this.props.calendars.map(calendar => (
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
            value={this.props.tempEvent.description}
            onChange={this.handleEventDescriptionChange}
          />
        </Grid>
      </Grid>
    </div>;
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
