import {
  GET_ERRORS,
  SET_CURRENT_USER,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE
} from "./action-types";
import setAuthToken from "../../../setAuthToken";
import { RSAA } from "redux-api-middleware";

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const getCurrentUser = () => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      endpoint: "https://theorganizer.azurewebsites.net/api/users/current",
      method: "GET",
      headers: { "Content-Type": "application/json" },
      types: [
        AUTH_REQUEST,
        {
          type: AUTH_SUCCESS,
          payload: (action, state, res) => res.json().then(json => json)
        },
        AUTH_FAILURE
      ]
    }
  });

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/login");
};
