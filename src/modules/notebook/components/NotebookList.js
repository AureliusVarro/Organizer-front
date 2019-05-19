import React from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import {
  onToggleEditNotebookDialog,
  onToggleAddNotebookDialog,
  onTempNotebookUpdated,
  onCurrentNotebookUpdated,
  onCurrentNoteUpdated,
  getNotebooks,
  editNotebook,
  getNotes
} from "../redux/action-creators";

const styles = theme => ({
  margin: { margin: 0 },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

class NotebookList extends React.Component {
  handleUpdateCurrentNotebook = item => event => {
    this.props.onCurrentNoteUpdated(null);
    this.props.onCurrentNotebookUpdated(item);
    this.props.getNotes(item.id);
  };

  toggleEditNotebookDialog = item => event => {
    this.props.onTempNotebookUpdated({ id: item.id, title: item.title });
    this.props.onToggleEditNotebookDialog();
  };

  render() {
    const { classes } = this.props;
    return (
      <List>
        <ListSubheader>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.props.onToggleAddNotebookDialog}
          >
            <AddIcon />
            Notebook
          </Button>
        </ListSubheader>
        {this.props.notebooks.map((item, index) => (
          <ListItem
            key={index}
            button
            onClick={this.handleUpdateCurrentNotebook(item)}
          >
            <ListItemText className={classes.listItem}>
              {item.title}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Edit"
                className={classes.margin}
                onClick={this.toggleEditNotebookDialog(item)}
              >
                <EditIcon className={classes.margin} fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

//Remove this

const mapDispatchToProps = {
  onToggleEditNotebookDialog,
  onToggleAddNotebookDialog,
  onTempNotebookUpdated,
  onCurrentNotebookUpdated,
  onCurrentNoteUpdated,
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
