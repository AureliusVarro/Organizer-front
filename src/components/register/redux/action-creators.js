import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "./action-types";
import { RSAA } from "redux-api-middleware";

export const registerUser = (user, history) => (dispatch, getState) =>
  dispatch({
    [RSAA]: {
      endpoint: "https://theorganizer.azurewebsites.net/api/users/register",
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
      types: [
        REGISTER_REQUEST,
        {
          type: REGISTER_SUCCESS,
          payload: (action, state, res) =>
            res.json().then(res => history.push("/login"))
        },
        REGISTER_FAILURE
      ]
    }
  });
