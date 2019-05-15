import * as actionTypes from "./action-types";
import { getCalendars } from "./action-creators";

export const initialState = {
  isOpenedAddNotebookDialog: false,
  isOpenedEditNotebookDialog: false,
  tempEvent: {
    title: "New Event",
    start: new Date().toISOString(),
    end: new Date().toISOString(),
    calendarId: 0
  },
  tempNotebook: { title: "New Notebook" },
  currentNotebook: null,
  notebooks: [],
  notes: [],
  UPD: false
};

const layoutManager = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_NOTEBOOK_DIALOG:
      return {
        ...state,
        isOpenedAddNotebookDialog: !state.isOpenedAddNotebookDialog
      };

    case actionTypes.TOGGLE_EDIT_NOTEBOOK_DIALOG:
      return {
        ...state,
        isOpenedEditNotebookDialog: !state.isOpenedEditNotebookDialog
      };

    case actionTypes.UPDATE_CURRENT_NOTEBOOK:
      return { ...state, currentNotebook: action.payload, UPD: !state.UPD };

    case actionTypes.UPDATE_TEMP_NOTEBOOK:
      return { ...state, tempNotebook: action.payload, UPD: !state.UPD };

    case actionTypes.SAVE_NOTEBOOKS:
      return { ...state, notebooks: action.payload };

    case actionTypes.ADD_NOTEBOOK_SUCCESS:
      return { ...state, isOpenedAddNotebookDialog: false };

    case actionTypes.EDIT_NOTEBOOK_SUCCESS:
      return { ...state, isOpenedEditNotebookDialog: false };

    case actionTypes.DELETE_NOTEBOOK_SUCCESS:
      return { ...state, isOpenedEditNotebookDialog: false };

    case actionTypes.GET_NOTES_SUCCESS:
      return { ...state, notes: action.payload };

    default:
      return state;
  }
};

export default layoutManager;
