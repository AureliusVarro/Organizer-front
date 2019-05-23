import { RSAA, getJSON } from "redux-api-middleware";

import * as actionTypes from "./action-types";
import apiUrls from "../../../common/constants/api-urls";
import { jsonRequestHeader } from "../../../common/constants/common";

export const onToggleAddCalendarDialog = () => ({
  type: actionTypes.TOGGLE_ADD_CALENDAR_DIALOG
});

export const onToggleAddEventDialog = () => ({
  type: actionTypes.TOGGLE_ADD_EVENT_DIALOG
});

export const onToggleEditCalendarDialog = () => ({
  type: actionTypes.TOGGLE_EDIT_CALENDAR_DIALOG
});

export const onToggleEditEventDialog = () => ({
  type: actionTypes.TOGGLE_EDIT_EVENT_DIALOG
});

export const onTempEventUpdated = tempEventData => ({
  type: actionTypes.UPDATE_TEMP_EVENT,
  payload: tempEventData || {
    title: "New Event",
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    calendarId: 1
  }
});

export const onTempCalendarUpdated = tempCalendarData => ({
  type: actionTypes.UPDATE_TEMP_CALENDAR,
  payload: tempCalendarData || {
    title: "New Calendar"
  }
});

export const saveCalendars = calendars => ({
  type: actionTypes.SAVE_CALENDARS,
  payload: calendars
});

export const getCalendars = () => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_CALENDARS,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_CALENDARS_REQUEST,
        {
          type: actionTypes.GET_CALENDARS_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(saveCalendars(json));
              dispatch(getEvents());
            })
        },
        actionTypes.GET_CALENDARS_FAILURE
      ]
    }
  });

export const addCalendar = calendarData => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.ADD_CALENDAR,
      body: JSON.stringify(calendarData),
      headers: jsonRequestHeader,
      types: [
        actionTypes.ADD_CALENDAR_REQUEST,
        {
          type: actionTypes.ADD_CALENDAR_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getCalendars());
            })
        },
        actionTypes.ADD_CALENDAR_FAILURE
      ]
    }
  });

export const editCalendar = calendar => dispatch =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_CALENDAR,
      body: JSON.stringify(calendar),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_CALENDAR_REQUEST,
        {
          type: actionTypes.EDIT_CALENDAR_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getCalendars());
            })
        },
        actionTypes.EDIT_CALENDAR_FAILURE
      ]
    }
  });

export const deleteCalendar = calendar => dispatch =>
  dispatch({
    [RSAA]: {
      method: "DELETE",
      endpoint: apiUrls.DELETE_CALENDAR + "/" + calendar.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.DELETE_CALENDAR_REQUEST,
        {
          type: actionTypes.DELETE_CALENDAR_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getCalendars());
            })
        },
        actionTypes.DELETE_CALENDAR_FAILURE
      ]
    }
  });

export const clearEvents = () => ({
  type: actionTypes.CLEAR_EVENTS
});

export const getEvents = () => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_EVENTS,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_EVENTS_REQUEST,
        actionTypes.GET_EVENTS_SUCCESS,
        actionTypes.GET_EVENTS_FAILURE
      ]
    }
  });

export const addEvent = eventData => dispatch => {
  console.log("1: ", eventData);
  eventData.start = eventData.start.toISOString();
  eventData.end = eventData.end.toISOString();
  console.log("2: ", eventData);
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.ADD_EVENT,
      body: JSON.stringify(eventData),
      headers: jsonRequestHeader,
      types: [
        actionTypes.ADD_EVENT_REQUEST,
        {
          type: actionTypes.ADD_EVENT_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              console.log("TEST", eventData.start.toString);
              dispatch(getCalendars());
            })
        },
        actionTypes.ADD_EVENT_FAILURE
      ]
    }
  });
};

export const editEvent = event => dispatch =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_EVENT,
      body: JSON.stringify(event),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_EVENT_REQUEST,
        {
          type: actionTypes.EDIT_EVENT_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getCalendars());
            })
        },
        actionTypes.EDIT_EVENT_FAILURE
      ]
    }
  });

export const deleteEvent = event => dispatch =>
  dispatch({
    [RSAA]: {
      method: "DELETE",
      endpoint: apiUrls.DELETE_EVENT + "/" + event.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.DELETE_EVENT_REQUEST,
        {
          type: actionTypes.DELETE_EVENT_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getCalendars());
            })
        },
        actionTypes.DELETE_EVENT_FAILURE
      ]
    }
  });
