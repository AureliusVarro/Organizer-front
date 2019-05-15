import React from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import { IconButton, Typography, Grid, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import {
  onToggleEditNotebookDialog,
  onTempNotebookUpdated,
  onCurrentNotebookUpdated,
  getNotebooks,
  editNotebook,
  getNotes
} from "../redux/action-creators";

const styles = theme => ({
  indent: {
    marginLeft: "32px"
  },
  margin: { margin: 0 }
});

class NotebookList extends React.Component {
  handleUpdateCurrentNotebook = item => event => {
    this.props.onCurrentNotebookUpdated(item);
    this.props.getNotes(item);
  };

  toggleEditNotebookDialog = item => event => {
    this.props.onTempNotebookUpdated({ id: item.id, title: item.title });
    this.props.onToggleEditNotebookDialog();
  };

  trimTitle = title => {
    if (title) {
      if (title.length <= 14) return title;
      else return title.substring(0, 14) + "...";
    } else return "NULL";
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.notebooks.map((item, index) => (
          <div className={classes.indent} key={index}>
            <Grid container alignItems="center" direction="row">
              <Grid item xs={8}>
                <Button onClick={this.handleUpdateCurrentNotebook(item)}>
                  {this.trimTitle(item.title)}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <IconButton
                  aria-label="Edit"
                  className={classes.margin}
                  onClick={this.toggleEditNotebookDialog(item)}
                >
                  <EditIcon className={classes.margin} fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToggleEditNotebookDialog,
  onTempNotebookUpdated,
  onCurrentNotebookUpdated,
  getNotebooks,
  editNotebook,
  getNotes
};

const mapStateToProps = state => ({
  ...state.notes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NotebookList));
