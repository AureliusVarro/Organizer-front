import * as actionTypes from "./action-types";
import { getCalendars } from "./action-creators";

export const initialState = {
  isOpenedAddEventDialog: false,
  isOpenedAddCalendarDialog: false,
  isOpenedEditCalendarDialog: false,
  tempEvent: {
    title: "New Event",
    start: new Date().toISOString(),
    end: new Date().toISOString(),
    calendarId: 0
  },
  tempCalendar: { title: "New Calendar", isDisplayed: false },
  calendars: [],
  events: [],
  UPD: false
};

const layoutManager = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_EVENT_DIALOG:
      return {
        ...state,
        isOpenedAddEventDialog: !state.isOpenedAddEventDialog
      };

    case actionTypes.TOGGLE_ADD_CALENDAR_DIALOG:
      return {
        ...state,
        isOpenedAddCalendarDialog: !state.isOpenedAddCalendarDialog
      };

    case actionTypes.TOGGLE_EDIT_CALENDAR_DIALOG:
      return {
        ...state,
        isOpenedEditCalendarDialog: !state.isOpenedEditCalendarDialog
      };

    case actionTypes.UPDATE_TEMP_EVENT:
      return { ...state, tempEvent: action.payload, UPD: !state.UPD };

    case actionTypes.UPDATE_TEMP_CALENDAR:
      return { ...state, tempCalendar: action.payload, UPD: !state.UPD };

    case actionTypes.SAVE_CALENDARS:
      return { ...state, calendars: action.payload };

    case actionTypes.ADD_CALENDAR_SUCCESS:
      return { ...state, isOpenedAddCalendarDialog: false };

    case actionTypes.EDIT_CALENDAR_SUCCESS:
      return { ...state, isOpenedEditCalendarDialog: false };

    case actionTypes.DELETE_CALENDAR_SUCCESS:
      return { ...state, isOpenedEditCalendarDialog: false };

    case actionTypes.CLEAR_EVENTS:
      return { ...state, events: [] };

    case actionTypes.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: state.events.concat(action.payload),
        UPD: !state.UPD
      };

    case actionTypes.ADD_EVENT_SUCCESS:
      return { ...state, isOpenedAddEventDialog: false };

    default:
      return state;
  }
};

export default layoutManager;
