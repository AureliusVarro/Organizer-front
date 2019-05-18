import React from "react";
import { connect } from "react-redux";

import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  todoPaperGrid: {
    height: "100%"
  }
});

class Todo extends React.Component {
  render() {
    let checkedTodos = [];
    let uncheckedTodos = [];
    if (this.props.todos[0]) {
      this.props.todos.map(item => {});
    }

    return (
      <Grid
        classes={classNames.todoPaperGrid}
        container
        direction="row"
        spacing={24}
      >
        <Grid item xs={6}>
          <Paper className={classNames.paper}>
            <Paper>
              <Typography variant="h4">
                {this.props.currentTodoList
                  ? this.props.currentTodoList.title
                  : "Loading..."}
              </Typography>
            </Paper>{" "}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classNames.paper}>
            <Typography variant="h4">Edit Note</Typography>
            <Typography>Loading...</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state.todos
});

const mapDispatchToProps = {};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo)
);
