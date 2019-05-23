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
    title: "New TodoList"
  }
});

export const onCurrentTodoListUpdated = tempTodoListData => ({
  type: actionTypes.UPDATE_CURRENT_TODOLIST,
  payload: tempTodoListData
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
              if (!getState().todos.currentTodoList && json[0]) {
                dispatch(onCurrentTodoListUpdated(json[0]));
                dispatch(getTodos(json[0].id));
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

export const editTodoList = todoList => (dispatch, getState) =>
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
              if (todoList.id === getState().todos.currentTodoList.id)
                dispatch(onCurrentTodoListUpdated(todoList));
            })
        },
        actionTypes.EDIT_TODOLIST_FAILURE
      ]
    }
  });

export const deleteTodoList = todoList => (dispatch, getState) =>
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
              if (todoList.id === getState().todos.currentTodoList.id)
                dispatch(onCurrentTodoListUpdated(null));
            })
        },
        actionTypes.DELETE_TODOLIST_FAILURE
      ]
    }
  });

export const onCurrentTodoUpdated = tempTodoData => ({
  type: actionTypes.UPDATE_CURRENT_TODO,
  payload: tempTodoData
});

export const getTodos = todoListId => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_TODOS + "/" + todoListId,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_TODOS_REQUEST,
        actionTypes.GET_TODOS_SUCCESS,
        actionTypes.GET_TODOS_FAILURE
      ]
    }
  });

export const addTodo = () => (dispatch, getState) => {
  if (getState().todos.todoLists[0] && getState().todos.currentTodoList) {
    console.log(1);
    dispatch({
      [RSAA]: {
        method: "POST",
        endpoint: apiUrls.ADD_TODO,
        body: JSON.stringify({
          todoListId: getState().todos.currentTodoList.id,
          title: "New Todo",
          text: "Text"
        }),
        headers: jsonRequestHeader,
        types: [
          actionTypes.ADD_TODO_REQUEST,
          {
            type: actionTypes.ADD_TODO_SUCCESS,
            payload: (action, state, res) =>
              getJSON(res).then(json => {
                dispatch(getTodos(json.todoListId));
              })
          },
          actionTypes.ADD_TODO_FAILURE
        ]
      }
    });
  } else {
    console.log(2);
    dispatch(onToggleAddTodoListDialog());
  }
};

export const editTodo = todo => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_TODO,
      body: JSON.stringify(todo),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_TODO_REQUEST,
        {
          type: actionTypes.EDIT_TODO_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getTodos(getState().todos.currentTodoList.id));
              if (todo.id == getState().todos.currentTodo.id)
                dispatch(onCurrentTodoUpdated(todo));
            })
        },
        actionTypes.EDIT_TODO_FAILURE
      ]
    }
  });

export const deleteTodo = todo => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      method: "DELETE",
      endpoint: apiUrls.DELETE_TODO + "/" + todo.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.DELETE_TODO_REQUEST,
        {
          type: actionTypes.DELETE_TODO_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getTodos(todo.todoListId));
              if (todo.id === getState().todos.currentTodo.id)
                dispatch(onCurrentTodoUpdated(null));
            })
        },
        actionTypes.DELETE_TODO_FAILURE
      ]
    }
  });
