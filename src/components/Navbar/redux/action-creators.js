import { GET_ERRORS, SET_CURRENT_USER } from "./action-types";
import setAuthToken from "../../../setAuthToken";

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
