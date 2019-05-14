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
  getTodoLists
} from "../todo/redux/action-creators";

import { onToggleSidebar } from "./redux/action-creators";

const mapStateToProps = state => ({
  ...state.common,
  ...state.layoutManager,
  ...state.calendar,
  ...state.todo
});

const mapDispatchToProps = {
  onToggleSidebar,
  resetCurrentUser,
  getCurrentUser,
  onToggleAddCalendarDialog,
  onToggleAddEventDialog,
  getCalendars,
  onToggleAddTodoListDialog,
  getTodoLists
};

const LayoutManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutManager);

export default withRouter(LayoutManagerContainer);
