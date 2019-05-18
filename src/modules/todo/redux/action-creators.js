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

export const onCurrentTodoListUpdated = tempTodoListData => ({
  type: actionTypes.UPDATE_CURRENT_TODOLIST,
  payload: tempTodoListData || {
    title: "New Todo List"
  }
});

export const saveTodoLists = todoListData => ({
  type: actionTypes.SAVE_TODOLISTS,
  payload: todoListData
});

export const getTodoLists = () => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_TODOLISTS,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_TODOLISTS_REQUEST,
        {
          type: actionTypes.GET_TODOLISTS_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(saveTodoLists(json));
              if (!getState().currentTodoList && json[0]) {
                dispatch(onCurrentTodoListUpdated(json[0]));
                dispatch(getTodos(json[0]));
              }
            })
        },
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
      endpoint: apiUrls.DELETE_TODOLIST + "/" + todoList.id,
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

export const getTodos = todoList => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_TODOS + "/" + todoList.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_TODOS_REQUEST,
        actionTypes.GET_TODOS_SUCCESS,
        actionTypes.GET_TODOS_FAILURE
      ]
    }
  });

export const addTodo = todoList => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.ADD_TODO,
      body: JSON.stringify(todoList),
      headers: jsonRequestHeader,
      types: [
        actionTypes.ADD_TODO_REQUEST,
        actionTypes.ADD_TODO_SUCCESS,
        actionTypes.ADD_TODO_FAILURE
      ]
    }
  });

export const editTodo = todoList => dispatch =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_TODO,
      body: JSON.stringify(todoList),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_TODO_REQUEST,
        actionTypes.EDIT_TODO_SUCCESS,
        actionTypes.EDIT_TODO_FAILURE
      ]
    }
  });
