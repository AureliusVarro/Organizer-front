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
              if (!getState().notes.currentNotebook && json[0]) {
                dispatch(onCurrentNotebookUpdated(json[0]));
                dispatch(getNotes(json[0].id));
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

export const deleteNotebook = notebook => (dispatch, getState) =>
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
              if (notebook.id === getState().notes.currentNotebook.id)
                dispatch(onCurrentNotebookUpdated(null));
            })
        },
        actionTypes.DELETE_NOTEBOOK_FAILURE
      ]
    }
  });

export const onCurrentNoteUpdated = tempNoteData => ({
  type: actionTypes.UPDATE_CURRENT_NOTE,
  payload: tempNoteData
});

export const getNotes = notebookId => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_NOTES + "/" + notebookId,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_NOTES_REQUEST,
        actionTypes.GET_NOTES_SUCCESS,
        actionTypes.GET_NOTES_FAILURE
      ]
    }
  });

export const addNote = () => (dispatch, getState) => {
  if (getState().notes.notebooks[0] && getState().notes.currentNotebook) {
    console.log(1);
    dispatch({
      [RSAA]: {
        method: "POST",
        endpoint: apiUrls.ADD_NOTE,
        body: JSON.stringify({
          notebookId: getState().notes.currentNotebook.id,
          title: "New Note",
          text: "Text"
        }),
        headers: jsonRequestHeader,
        types: [
          actionTypes.ADD_NOTE_REQUEST,
          {
            type: actionTypes.ADD_NOTE_SUCCESS,
            payload: (action, state, res) =>
              getJSON(res).then(json => {
                dispatch(getNotes(json.notebookId));
              })
          },
          actionTypes.ADD_NOTE_FAILURE
        ]
      }
    });
  } else {
    console.log(2);
    dispatch(onToggleAddNotebookDialog());
  }
};

export const editNote = note => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_NOTE,
      body: JSON.stringify(note),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_NOTE_REQUEST,
        {
          type: actionTypes.EDIT_NOTE_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getNotes(getState().notes.currentNotebook.id));
            })
        },
        actionTypes.EDIT_NOTE_FAILURE
      ]
    }
  });

export const deleteNote = note => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      method: "DELETE",
      endpoint: apiUrls.DELETE_NOTE + "/" + note.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.DELETE_NOTE_REQUEST,
        {
          type: actionTypes.DELETE_NOTE_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getNotes(note.notebookId));
              if (note.id === getState().notes.currentNote.id)
                dispatch(onCurrentNoteUpdated(null));
            })
        },
        actionTypes.DELETE_NOTE_FAILURE
      ]
    }
  });
