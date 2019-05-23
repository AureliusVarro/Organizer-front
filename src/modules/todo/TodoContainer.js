import { connect } from "react-redux";
import Todo from "./Todo";

import {
  onCurrentTodoUpdated,
  onToggleAddTodoListDialog,
  addTodo,
  editTodo,
  deleteTodo
} from "./redux/action-creators";

const mapStateToProps = state => ({
  ...state.todos
});

const mapDispatchToProps = {
  onCurrentTodoUpdated,
  onToggleAddTodoListDialog,
  addTodo,
  editTodo,
  deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
