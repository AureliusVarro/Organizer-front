import * as actionTypes from "./action-types";
import { getLocaleFromGMT } from "../../../common/utils/getLocaleFromGMT";

export const initialState = {
  isOpenedAddEventDialog: false,
  isOpenedAddCalendarDialog: false,
  isOpenedEditEventDialog: false,
  isOpenedEditCalendarDialog: false,
  tempEvent: {
    title: "New Event",
    start: new Date(),
    end: new Date(),
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

    case actionTypes.TOGGLE_EDIT_EVENT_DIALOG:
      return {
        ...state,
        isOpenedEditEventDialog: !state.isOpenedEditEventDialog
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
      return {
        ...state,
        isOpenedAddCalendarDialog: false,
        tempCalendar: { title: "New Calendar", isDisplayed: false }
      };

    case actionTypes.EDIT_CALENDAR_SUCCESS:
      return {
        ...state,
        isOpenedEditCalendarDialog: false,
        tempCalendar: { title: "New Calendar", isDisplayed: false }
      };

    case actionTypes.DELETE_CALENDAR_SUCCESS:
      return {
        ...state,
        isOpenedEditCalendarDialog: false,
        tempCalendar: { title: "New Calendar", isDisplayed: false }
      };

    case actionTypes.CLEAR_EVENTS:
      return { ...state, events: [], tempEvent: null };

    case actionTypes.GET_EVENTS_SUCCESS:
      let tempEvents = action.payload || [];
      tempEvents.map(item => {
        item.start = getLocaleFromGMT(new Date(item.start));
        item.end = getLocaleFromGMT(new Date(item.end));
      });
      return {
        ...state,
        events: tempEvents,
        UPD: !state.UPD
      };

    case actionTypes.ADD_EVENT_SUCCESS:
      return {
        ...state,
        isOpenedAddEventDialog: false,
        tempEvent: {
          title: "New Event",
          start: new Date(),
          end: new Date(),
          calendarId: 0
        }
      };

    case actionTypes.EDIT_EVENT_SUCCESS:
      return {
        ...state,
        isOpenedEditEventDialog: false,
        tempEvent: {
          title: "New Event",
          start: new Date(),
          end: new Date(),
          calendarId: 0
        }
      };

    case actionTypes.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        isOpenedEditEventDialog: false,
        tempEvent: {
          title: "New Event",
          start: new Date(),
          end: new Date(),
          calendarId: 0
        }
      };

    default:
      return state;
  }
};

export default layoutManager;
