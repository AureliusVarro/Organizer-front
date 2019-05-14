import { RSAA, getJSON } from "redux-api-middleware";

import * as actionTypes from "./action-types";
import apiUrls from "../../../common/constants/api-urls";
import { jsonRequestHeader } from "../../../common/constants/common";

export const onToggleAddTodoListDialog = () => ({
  type: actionTypes.TOGGLE_ADD_TODOLIST_DIALOG
});
export const onToggleEditTodoListDialog = () => ({
  type: actionTypes.TOGGLE_EDIT_TODOLIST_DIALOG
});

export const onTempTodoListUpdated = tempTodoListData => ({
  type: actionTypes.UPDATE_TEMP_TODOLIST,
  payload: tempTodoListData || {
    title: "New Todo List"
  }
});

export const getTodoLists = () => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_TODOLISTS,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_TODOLISTS_REQUEST,
        actionTypes.GET_TODOLISTS_SUCCESS,
        actionTypes.GET_TODOLISTS_FAILURE
      ]
    }
  });

export const addTodoList = todoListData => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.ADD_TODOLIST,
      body: JSON.stringify(todoListData),
      headers: jsonRequestHeader,
      types: [
        actionTypes.ADD_TODOLIST_REQUEST,
        {
          type: actionTypes.ADD_TODOLIST_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getTodoLists());
            })
        },
        actionTypes.ADD_TODOLIST_FAILURE
      ]
    }
  });

export const editTodoList = todoList => dispatch =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_TODOLIST,
      body: JSON.stringify(todoList),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_TODOLIST_REQUEST,
        {
          type: actionTypes.EDIT_TODOLIST_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getTodoLists());
            })
        },
        actionTypes.EDIT_TODOLIST_FAILURE
      ]
    }
  });

export const deleteTodoList = todoList => dispatch =>
  dispatch({
    [RSAA]: {
      method: "DELETE",
      endpoint: apiUrls.DELETE_CALENDAR + "/" + todoList.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.DELETE_TODOLIST_REQUEST,
        {
          type: actionTypes.DELETE_TODOLIST_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getTodoLists());
            })
        },
        actionTypes.DELETE_TODOLIST_FAILURE
      ]
    }
  });
