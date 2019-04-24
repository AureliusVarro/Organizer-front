import {
  SET_CURRENT_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./action-types";
import setAuthToken from "../../../setAuthToken";
import { RSAA } from "redux-api-middleware";

export const loginUser = user => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      endpoint: "https://theorganizer.azurewebsites.net/api/users/authenticate",
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
      types: [
        LOGIN_REQUEST,
        {
          type: LOGIN_SUCCESS,
          payload: (action, state, res) => res.json().then(json => json)
        },
        LOGIN_FAILURE
      ]
    }
  });

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/login");
};

/*export const getCurrentUserInfo = () => (dispatch, getState) => dispatch({
    [RSAA]: {
      method: 'GET',
      credentials: 'include',
      endpoint: api.CURRENT_USER,
      types: [
        actionTypes.GET_CURRENT_USER_INFO_REQUEST,
        {
          type: actionTypes.GET_CURRENT_USER_INFO_SUCCESS,
          payload: (action, state, res) => getJSON(res).then(json => json)
        },
        actionTypes.GET_CURRENT_USER_INFO_FAILURE
      ]
    }
  });*/
