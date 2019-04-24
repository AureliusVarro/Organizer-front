import { SET_CURRENT_USER, LOGIN_SUCCESS } from "./action-types";
import isEmpty from "../../../common/validation/is-empty";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../setAuthToken";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case LOGIN_SUCCESS:
      const { token } = action.payload;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded);
      return {
        ...state,
        isAuthenticated: !isEmpty(decoded),
        user: decoded
      };
    default:
      return state;
  }
}
