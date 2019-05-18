import React from "react";
import { connect } from "react-redux";

import {
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import {} from "./redux/action-creators";
import NoteEditor from "./components/NoteEditor";

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
  handleSelectNote = (event, note) => {
    console.log("shit", note, event);
  };

  render() {
    const deleteWhenDone = (
      <div>
        <Button
          variant="contained"
          className={classNames.indent}
          disabled={"item.id" == this.props.currentNote.id}
          onClick={this.handleSelectNote("item")}
        >
          {console.log(this.props.currentNote.id)}
          <Typography>item.title</Typography>
        </Button>
        <Divider />
      </div>
    );

    return (
      <Grid
        className={this.props.classes.notePaperGrid}
        container
        direction="row"
        spacing={24}
        alignItems="stretch"
      >
        <Grid item xs={6}>
          <Paper className={this.props.classes.paper}>
            <Typography variant="h4">
              {this.props.currentNotebook
                ? this.props.currentNotebook.title
                : "Loading..."}
            </Typography>
            <Divider />
            <List>
              {this.props.notes.map(item => (
                <ListItem
                  key={item.id}
                  button
                  selected={
                    this.props.currentNote &&
                    this.props.currentNote.id === item.id
                  }
                  onClick={event => this.handleSelectNote(event, item)}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={this.props.classes.paper}>
            <Typography variant="h4">Edit Note</Typography>
            {this.props.currentNote ? <NoteEditor /> : "Loading..."}
          </Paper>
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
  )(Notebook)
);
