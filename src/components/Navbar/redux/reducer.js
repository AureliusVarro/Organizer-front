import { SET_CURRENT_USER, AUTH_SUCCESS } from "./action-types";
import isEmpty from "../../../common/validation/is-empty";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../setAuthToken";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      console.log("CURRENT USER: ", action.payload);
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
