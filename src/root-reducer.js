import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import common from "./common/redux/reducer";
import layoutManager from "./modules/layout-manager/redux/reducer";
import sideNotifications from "./modules/side-notifications/redux/reducer";
import calendar from "./modules/calendar/redux/reducer";
import todo from "./modules/todo/redux/reducer";

export default combineReducers({
  common,
  layoutManager,
  sideNotifications,
  calendar,
  todo,
  routing: routerReducer
});
