import React from "react";

import {
  Grid,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TodoEditor from "./components/TodoEditor";

const styles = theme => ({
  paper: {
    margin: "0",
    padding: theme.spacing.unit * 2,
    maxHeight: "95%",
    height: "95%",
    color: theme.palette.text.secondary,
    overflow: "auto"
  },
  todoPaperGrid: {
    maxHeight: "95vh",
    height: "95vh"
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
              {currentTodoList ? currentTodoList.title : "Loading..."}
            </Typography>
            <Divider />
            {activeTodos[0] || doneTodos[0] ? (
              <React.Fragment>
                <Typography>Active todos</Typography>
                <List>
                  {activeTodos.map(item => (
                    <ListItem
                      key={item.id}
                      button
                      selected={currentTodo && currentTodo.id === item.id}
                      onClick={event => this.handleSelectTodo(event, item)}
                    >
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
                <Typography>Done todos</Typography>
                <List>
                  {doneTodos.map(item => (
                    <ListItem
                      key={item.id}
                      button
                      selected={currentTodo && currentTodo.id === item.id}
                      onClick={event => this.handleSelectTodo(event, item)}
                    >
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : currentTodoList ? (
              <React.Fragment>
                <Typography>
                  {"You don't hane any todos in this todo lists"}
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
                <Typography>{"You don't hane any todo lists"}</Typography>
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
