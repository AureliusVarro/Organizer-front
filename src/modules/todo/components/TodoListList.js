import React from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import {
  onToggleEditTodoListDialog,
  onToggleAddTodoListDialog,
  onTempTodoListUpdated,
  onCurrentTodoListUpdated,
  getTodoLists,
  editTodoList,
  getTodos
} from "../redux/action-creators";

const styles = theme => ({
  indent: {
    marginLeft: "32px"
  },
  margin: { margin: 0 },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

class TodoListList extends React.Component {
  handleUpdateCurrentTodoList = item => event => {
    this.props.onCurrentTodoListUpdated(item);
    this.props.getTodos(item);
  };

  toggleEditTodoListDialog = item => event => {
    this.props.onTempTodoListUpdated({ id: item.id, title: item.title });
    this.props.onToggleEditTodoListDialog();
  };

  trimTitle = title => {
    if (title) {
      if (title.length <= 12) return title;
      else return title.substring(0, 12) + "...";
    } else return "NULL";
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <List>
          <ListSubheader>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.props.onToggleAddTodoListDialog}
            >
              <AddIcon />
              Todo List
            </Button>
          </ListSubheader>
          {this.props.todoLists.map((item, index) => (
            <ListItem
              key={index}
              button
              onClick={this.handleUpdateCurrentTodoList(item)}
            >
              <ListItemText className={classes.listItem}>
                {item.title}
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Edit"
                  className={classes.margin}
                  onClick={this.toggleEditTodoListDialog(item)}
                >
                  <EditIcon className={classes.margin} fontSize="small" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToggleEditTodoListDialog,
  onToggleAddTodoListDialog,
  onTempTodoListUpdated,
  onCurrentTodoListUpdated,
  getTodoLists,
  editTodoList,
  getTodos
};

const mapStateToProps = state => ({
  ...state.todos
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoListList));
