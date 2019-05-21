import React from "react";
import { connect } from "react-redux";

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

import {
  onCurrentTodoUpdated,
  addTodo,
  editTodo,
  deleteTodo
} from "./redux/action-creators";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    maxHeight: "95%",
    overflow: "auto",
    color: theme.palette.text.secondary
  },
  todoPaperGrid: {
    height: "100%"
  }
});

class Todo extends React.Component {
  handleAddTodo = () => {
    this.props.addTodo();
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
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">
              {this.props.currentTodoList
                ? this.props.currentTodoList.title
                : "Loading..."}
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
                      <ListItemText primary={item.text} />
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
        <Grid item xs={6}>
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

const mapStateToProps = state => ({
  ...state.todos
});

const mapDispatchToProps = {
  onCurrentTodoUpdated,
  addTodo,
  editTodo,
  deleteTodo
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo)
);
