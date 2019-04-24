import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "../../components/Login/redux/reducer";
import navbarReducer from "../../components/Navbar/redux/reducer";

export default combineReducers({
  auth: authReducer,
  navbar: navbarReducer
});
