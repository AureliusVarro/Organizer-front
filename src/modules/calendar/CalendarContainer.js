import { connect } from "react-redux";
import Calendar from "./Calendar";

import {
  onToggleAddEventDialog,
  onTempEventUpdated,
  getEvents
} from "./redux/action-creators";

const mapStateToProps = state => ({ ...state.calendar });

const mapDispatchToProps = {
  onToggleAddEventDialog,
  onTempEventUpdated,
  getEvents
};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);

export default CalendarContainer;
