import { connect } from "react-redux";
import { withRouter } from "react-router";
import LayoutManager from "./components/LayoutManager";

import {
  resetCurrentUser,
  getCurrentUser
} from "../../common/redux/action-creators";

import {
  onToggleAddCalendarDialog,
  onToggleAddEventDialog,
  getCalendars
} from "../calendar/redux/action-creators";

import {
  onToggleAddTodoListDialog,
  getTodoLists,
  addTodo
} from "../todo/redux/action-creators";

import {
  onToggleAddNotebookDialog,
  addNote
} from "../notebook/redux/action-creators";

import { onToggleAddContactDialog } from "../contacts/redux/action-creators";

import { onToggleSidebar } from "./redux/action-creators";

const mapStateToProps = state => ({
  ...state.common,
  ...state.layoutManager,
  ...state.calendars,
  ...state.todos,
  ...state.notes,
  ...state.contacts
});

const mapDispatchToProps = {
  onToggleSidebar,
  resetCurrentUser,
  getCurrentUser,
  onToggleAddCalendarDialog,
  onToggleAddEventDialog,
  getCalendars,
  //Todos
  onToggleAddTodoListDialog,
  getTodoLists,
  addTodo,
  //notes
  onToggleAddNotebookDialog,
  addNote,
  //Contacts
  onToggleAddContactDialog
};

const LayoutManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutManager);

export default withRouter(LayoutManagerContainer);
