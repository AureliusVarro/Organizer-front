import { connect } from "react-redux";
import Calendar from "./Calendar";

import {
  onToggleAddEventDialog,
  onToggleEditEventDialog,
  onTempEventUpdated,
  getEvents,
  editEvent
} from "./redux/action-creators";

const mapStateToProps = state => ({ ...state.calendars });

const mapDispatchToProps = {
  onToggleAddEventDialog,
  onToggleEditEventDialog,
  onTempEventUpdated,
  getEvents,
  editEvent
};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);

export default CalendarContainer;
