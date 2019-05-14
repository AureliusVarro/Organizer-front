import React from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import { IconButton, Typography, Grid, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import PopoverText from "../../../common/components/popover-text/PopoverText";

import {
  onToggleEditTodoListDialog,
  onTempTodoListUpdated,
  getTodoLists,
  editTodoList
} from "../redux/action-creators";

const styles = theme => ({
  indent: {
    marginLeft: "32px"
  },
  margin: { margin: 0 }
});

class TodoListList extends React.Component {
  state = {
    open: false
  };

  handleStuff = item => event => {
    console.log(item, event);
  };

  toggleEditTodoListDialog = item => event => {
    this.props.onTempTodoListUpdated({ id: item.id, title: item.title });
    this.props.onToggleEditTodoListDialog();
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
        {this.props.todoLists.map((item, index) => (
          <div className={classes.indent} key={index}>
            <Grid container alignItems="center" direction="row">
              <Grid item xs={8}>
                <Button onClick={this.handleStuff(item)}>
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
  getTodoLists,
  editTodoList
};

const mapStateToProps = state => ({
  ...state.todo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoListList));
