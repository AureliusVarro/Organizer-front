import React from "react";

import {
  Grid,
  Button,
  TextField,
  MenuItem,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
  }
});

class TodoEditor extends React.Component {
  handleTitleChange = name => {
    let updCurrentTodo = this.props.currentTodo;
    updCurrentTodo.title = name.target.value;
    this.props.onCurrentTodoUpdated(updCurrentTodo);
  };

  handleTodoListChange = name => {
    console.log("todoListId", name.target.value);
    let updCurrentTodo = this.props.currentTodo;
    updCurrentTodo.todoListId = name.target.value;
    console.log("todoListId", updCurrentTodo);
    this.props.onCurrentTodoUpdated(updCurrentTodo);
  };

  handleDescriptionChange = name => {
    let updCurrentTodo = this.props.currentTodo;
    updCurrentTodo.text = name.target.value;
    this.props.onCurrentTodoUpdated(updCurrentTodo);
  };
  handleIsDoneChange = event => {
    console.log("event,", event.target);
    let updCurrentTodo = this.props.currentTodo;
    updCurrentTodo.isDone = event.target.checked;
    this.props.onCurrentTodoUpdated(updCurrentTodo);
  };

  handleEditTodo = () => {
    this.props.editTodo(this.props.currentTodo);
  };

  handleDeleteTodo = () => {
    this.props.deleteTodo(this.props.currentTodo);
  };

  render() {
    return (
      <Grid container spacing={8} direction="column">
        <Grid item xs={12}>
          <TextField
            autoFocus
            margin="dense"
            id="note-name"
            label="Todo Name"
            fullWidth
            value={this.props.currentTodo.title}
            onChange={this.handleTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={this.props.currentTodo.isDone}
                  onChange={this.handleIsDoneChange}
                  value="checkedA"
                />
              }
              label="Done"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="select-todoList"
            select
            label="Select TodoList"
            value={this.props.currentTodo.todoListId}
            onChange={this.handleTodoListChange}
            fullWidth
            margin="dense"
          >
            {this.props.todoLists &&
              this.props.todoLists.map(todoList => (
                <MenuItem key={todoList.id} value={todoList.id}>
                  {todoList.title}
                </MenuItem>
              ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="note-description"
            label="Todo Description"
            placeholder="Description"
            multiline
            fullWidth
            margin="dense"
            rows={18}
            rowsMax={18}
            value={this.props.currentTodo.text}
            onChange={this.handleDescriptionChange}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          spacing={16}
        >
          <Grid item xs={2}>
            <Button
              color="secondary"
              variant="outlined"
              onClick={this.handleDeleteTodo}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleEditTodo}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TodoEditor);
