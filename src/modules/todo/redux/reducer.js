import * as actionTypes from "./action-types";
import { getCalendars } from "./action-creators";

export const initialState = {
  isOpenedAddEventDialog: false,
  isOpenedAddTodoListDialog: false,
  isOpenedEditTodoListDialog: false,
  tempEvent: {
    title: "New Event",
    start: new Date().toISOString(),
    end: new Date().toISOString(),
    calendarId: 0
  },
  tempTodoList: { title: "New ToDo List" },
  currentTodoList: { title: "Not Selected" },
  todoLists: [],
  events: [],
  UPD: false
};

const layoutManager = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_TODOLIST_DIALOG:
      return {
        ...state,
        isOpenedAddTodoListDialog: !state.isOpenedAddTodoListDialog
      };

    case actionTypes.TOGGLE_EDIT_TODOLIST_DIALOG:
      return {
        ...state,
        isOpenedEditTodoListDialog: !state.isOpenedEditTodoListDialog
      };

    case actionTypes.UPDATE_TEMP_EVENT:
      return { ...state, tempEvent: action.payload, UPD: !state.UPD };

    case actionTypes.UPDATE_TEMP_TODOLIST:
      return { ...state, tempTodoList: action.payload, UPD: !state.UPD };

    case actionTypes.GET_TODOLISTS_SUCCESS:
      return { ...state, todoLists: action.payload };

    case actionTypes.ADD_TODOLIST_SUCCESS:
      return { ...state, isOpenedAddTodoListDialog: false };

    case actionTypes.EDIT_TODOLIST_SUCCESS:
      return { ...state, isOpenedEditTodoListDialog: false };

    case actionTypes.DELETE_TODOLIST_SUCCESS:
      return { ...state, isOpenedEditTodoListDialog: false };

    default:
      return state;
  }
};

export default layoutManager;
