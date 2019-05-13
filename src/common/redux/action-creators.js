import ls from "local-storage";
import { RSAA, getJSON } from "redux-api-middleware";

import apiUrls from "../constants/api-urls";
import actionTypes from "./action-types";
import { jsonRequestHeader, tokenKey } from "../constants/common";

export const resetCurrentUser = () => ({
  type: actionTypes.RESET_CURRENT_USER
});

export const getCurrentUser = () => ({
  [RSAA]: {
    method: "GET",
    endpoint: apiUrls.CURRENT_USER,
    types: [
      actionTypes.GET_CURRENT_USER_REQUEST,
      actionTypes.GET_CURRENT_USER_SUCCESS,
      actionTypes.GET_CURRENT_USER_FAILURE
    ]
  }
});

export const signInUser = credentials => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.SIGN_IN_USER,
      body: JSON.stringify(credentials),
      headers: jsonRequestHeader,
      types: [
        actionTypes.USER_SIGN_IN_REQUEST,
        {
          type: actionTypes.USER_SIGN_IN_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              if (ls.set(tokenKey, json.token)) {
                dispatch(getCurrentUser());
              }
            })
        },
        actionTypes.USER_SIGN_IN_FAILURE
      ]
    }
  });

export const signUpUser = credentials => ({
  [RSAA]: {
    method: "POST",
    endpoint: apiUrls.SIGN_UP_USER,
    body: JSON.stringify(credentials),
    headers: jsonRequestHeader,
    types: [
      actionTypes.USER_SIGN_UP_REQUEST,
      actionTypes.USER_SIGN_UP_SUCCESS,
      actionTypes.USER_SIGN_UP_FAILURE
    ]
  }
});
