import * as actionTypes from "./action-types";
import { getCalendars } from "./action-creators";

export const initialState = {
  isOpenedAddEventDialog: false,
  isOpenedAddCalendarDialog: false,
  isOpenedEditCalendarDialog: false,
  tempContact: {
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

    default:
      return state;
  }
};

export default layoutManager;
