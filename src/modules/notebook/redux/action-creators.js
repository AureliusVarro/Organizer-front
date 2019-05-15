import { RSAA, getJSON } from "redux-api-middleware";

import * as actionTypes from "./action-types";
import apiUrls from "../../../common/constants/api-urls";
import { jsonRequestHeader } from "../../../common/constants/common";

export const onToggleAddNotebookDialog = () => ({
  type: actionTypes.TOGGLE_ADD_NOTEBOOK_DIALOG
});
export const onToggleEditNotebookDialog = () => ({
  type: actionTypes.TOGGLE_EDIT_NOTEBOOK_DIALOG
});

export const onTempNotebookUpdated = tempNotebookData => ({
  type: actionTypes.UPDATE_TEMP_NOTEBOOK,
  payload: tempNotebookData || {
    title: "New Notebook"
  }
});

export const onCurrentNotebookUpdated = tempNotebookData => ({
  type: actionTypes.UPDATE_CURRENT_NOTEBOOK,
  payload: tempNotebookData
});

export const saveNotebooks = notebookData => ({
  type: actionTypes.SAVE_NOTEBOOKS,
  payload: notebookData
});

export const getNotebooks = () => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_NOTEBOOKS,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_NOTEBOOKS_REQUEST,
        {
          type: actionTypes.GET_NOTEBOOKS_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(saveNotebooks(json));
              if (!getState().currentNotebook && json[0]) {
                dispatch(onCurrentNotebookUpdated(json[0]));
                dispatch(getNotes(json[0]));
              }
            })
        },
        actionTypes.GET_NOTEBOOKS_FAILURE
      ]
    }
  });

export const addNotebook = notebookData => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.ADD_NOTEBOOK,
      body: JSON.stringify(notebookData),
      headers: jsonRequestHeader,
      types: [
        actionTypes.ADD_NOTEBOOK_REQUEST,
        {
          type: actionTypes.ADD_NOTEBOOK_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getNotebooks());
            })
        },
        actionTypes.ADD_NOTEBOOK_FAILURE
      ]
    }
  });

export const editNotebook = notebook => dispatch =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_NOTEBOOK,
      body: JSON.stringify(notebook),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_NOTEBOOK_REQUEST,
        {
          type: actionTypes.EDIT_NOTEBOOK_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getNotebooks());
            })
        },
        actionTypes.EDIT_NOTEBOOK_FAILURE
      ]
    }
  });

export const deleteNotebook = notebook => dispatch =>
  dispatch({
    [RSAA]: {
      method: "DELETE",
      endpoint: apiUrls.DELETE_NOTEBOOK + "/" + notebook.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.DELETE_NOTEBOOK_REQUEST,
        {
          type: actionTypes.DELETE_NOTEBOOK_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getNotebooks());
            })
        },
        actionTypes.DELETE_NOTEBOOK_FAILURE
      ]
    }
  });

export const onCurrentNoteUpdated = tempNoteData => ({
  type: actionTypes.UPDATE_CURRENT_NOTE,
  payload: tempNoteData || {
    title: "New Note"
  }
});

export const getNotes = notebook => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_NOTES + "/" + notebook.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_NOTES_REQUEST,
        actionTypes.GET_NOTES_SUCCESS,
        actionTypes.GET_NOTES_FAILURE
      ]
    }
  });

export const addNote = notebook => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.ADD_NOTE,
      body: JSON.stringify(notebook),
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_NOTES_REQUEST,
        actionTypes.GET_NOTES_SUCCESS,
        actionTypes.GET_NOTES_FAILURE
      ]
    }
  });

export const editNote = notebook => dispatch =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_NOTE,
      body: JSON.stringify(notebook),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_NOTE_REQUEST,
        actionTypes.EDIT_NOTE_SUCCESS,
        actionTypes.EDIT_NOTE_FAILURE
      ]
    }
  });
