import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import common from "./common/redux/reducer";
import layoutManager from "./modules/layout-manager/redux/reducer";
import sideNotifications from "./modules/side-notifications/redux/reducer";
import calendars from "./modules/calendar/redux/reducer";
import todos from "./modules/todo/redux/reducer";
import notes from "./modules/notebook/redux/reducer";
import contacts from "./modules/contacts/redux/reducer";

export default combineReducers({
  common,
  layoutManager,
  sideNotifications,
  calendars,
  todos,
  notes,
  contacts,
  routing: routerReducer
});
