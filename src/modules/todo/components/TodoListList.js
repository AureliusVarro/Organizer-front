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
  onToggleEditTodoListDialog,
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
  margin: { margin: 0 }
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
        {this.props.todoLists.map((item, index) => (
          <div className={classes.indent} key={index}>
            <Grid container alignItems="center" direction="row">
              <Grid item xs={8}>
                <Button onClick={this.handleUpdateCurrentTodoList(item)}>
                  {this.trimTitle(item.title)}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <IconButton
                  aria-label="Edit"
                  className={classes.margin}
                  onClick={this.toggleEditTodoListDialog(item)}
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
  onToggleEditTodoListDialog,
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
