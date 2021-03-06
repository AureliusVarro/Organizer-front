import React from "react";

import {
  Grid,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Button,
  Checkbox
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TodoEditor from "./components/TodoEditor";

const styles = theme => ({
  paper: {
    margin: "0",
    padding: theme.spacing.unit * 2,
    maxHeight: "95%",
    height: "95%",
    color: theme.palette.text.secondary
  },
  list: {
    maxHeight: "80vh",
    height: "80vh",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  },
  todoPaperGrid: {
    maxHeight: "95vh",
    height: "95vh"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  listSection: {
    backgroundColor: "inherit"
  },
  checkbox: {
    padding: 0
  }
});

class Todo extends React.Component {
  handleAddTodo = () => {
    this.props.addTodo();
  };

  handleAddTodoList = () => {
    this.props.onToggleAddTodoListDialog();
  };

  handleSelectTodo = (event, todo) => {
    this.props.onCurrentTodoUpdated({
      id: todo.id,
      todoListId: todo.todoListId,
      title: todo.title,
      text: todo.text,
      isDone: todo.isDone
    });
  };

  handleIsDoneChange = item => event => {
    console.log("item,", item);
    console.log("event,", event.target);
    item.isDone = event.target.checked;
    this.props.editTodo(item);
  };

  render() {
    const {
      //Actions
      onCurrentTodoUpdated,
      editTodo,
      deleteTodo,
      //State
      classes,
      todoLists,
      activeTodos,
      doneTodos,
      currentTodoList,
      currentTodo
    } = this.props;

    return (
      <Grid
        className={classes.todoPaperGrid}
        container
        direction="row"
        spacing={24}
        alignItems="stretch"
      >
        <Grid item xs={6} className={classes.todoPaperGrid}>
          <Paper className={classes.paper}>
            <Typography variant="h4">
              {currentTodoList
                ? currentTodoList.title
                : "No Todo List Selected"}
            </Typography>
            <Divider />
            {activeTodos[0] || doneTodos[0] ? (
              <List className={classes.list} subheader={<li />}>
                <li className={classes.listSection}>
                  <ul className={classes.ul}>
                    <ListSubheader>
                      <Typography variant="h5">Active todos</Typography>
                      <Divider />
                    </ListSubheader>
                    {activeTodos.map(item => (
                      <ListItem
                        key={item.id}
                        button
                        selected={currentTodo && currentTodo.id === item.id}
                        onClick={event => this.handleSelectTodo(event, item)}
                      >
                        <Checkbox
                          className={classes.checkbox}
                          onChange={this.handleIsDoneChange(item)}
                          checked={item.isDone}
                          tabIndex={-1}
                          disableRipple
                          color="primary"
                        />
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </ul>
                </li>

                <li className={classes.listSection}>
                  <ul className={classes.ul}>
                    <ListSubheader>
                      <Typography variant="h5">Done todos</Typography>
                      <Divider />
                    </ListSubheader>
                    {doneTodos.map(item => (
                      <ListItem
                        key={item.id}
                        button
                        selected={currentTodo && currentTodo.id === item.id}
                        onClick={event => this.handleSelectTodo(event, item)}
                      >
                        <Checkbox
                          className={classes.checkbox}
                          onChange={this.handleIsDoneChange(item)}
                          checked={item.isDone}
                          tabIndex={-1}
                          disableRipple
                          color="primary"
                        />
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              </List>
            ) : currentTodoList ? (
              <React.Fragment>
                <Typography variant="h6">
                  {"You don't hane any todos in this todo list"}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleAddTodo}
                >
                  Create a todo?
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography variant="h6">
                  {"You don't hane any todo lists"}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleAddTodoList}
                >
                  Create a todo list?
                </Button>
              </React.Fragment>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.todoPaperGrid}>
          <Paper className={this.props.classes.paper}>
            <Typography variant="h4">Edit Todo</Typography>
            {currentTodo ? (
              <TodoEditor
                onCurrentTodoUpdated={onCurrentTodoUpdated}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                todoLists={todoLists}
                currentTodo={currentTodo}
              />
            ) : (
              "No todo selected"
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Todo);
