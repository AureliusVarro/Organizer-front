import React from "react";
import { connect } from "react-redux";

import {
  onToggleAddCalendarDialog,
  onToggleAddEventDialog,
  onToggleEditCalendarDialog,
  onTempCalendarUpdated,
  onTempEventUpdated,
  getCalendars,
  addCalendar,
  editCalendar,
  deleteCalendar,
  getEvents,
  addEvent,
  getAllEvents
} from "../redux/action-creators";

import AddCalendarDialog from "./dialogs/AddCalendarDialog";
import EditCalendarDialog from "./dialogs/EditCalendarDialog";
import AddEventDialog from "./dialogs/AddEventDialog";
import EditEventDialog from "./dialogs/EditEventDialog";

class CalendarDialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getCalendars();
  }

  render() {
    const {
      onToggleAddCalendarDialog,
      onToggleAddEventDialog,
      onToggleEditCalendarDialog,
      onTempCalendarUpdated,
      onTempEventUpdated,
      getCalendars,
      addCalendar,
      editCalendar,
      deleteCalendar,
      getEvents,
      addEvent,

      //state
      tempCalendar,
      tempEvent,
      isOpenedAddCalendarDialog,
      isOpenedEditCalendarDialog,
      isOpenedAddEventDialog,
      calendars
    } = this.props;
    return (
      <div>
        <AddCalendarDialog
          addCalendar={addCalendar}
          onToggleAddCalendarDialog={onToggleAddCalendarDialog}
          onTempCalendarUpdated={onTempCalendarUpdated}
          tempCalendar={tempCalendar}
          isOpenedAddCalendarDialog={isOpenedAddCalendarDialog}
        />
        <EditCalendarDialog
          editCalendar={editCalendar}
          deleteCalendar={deleteCalendar}
          onToggleEditCalendarDialog={onToggleEditCalendarDialog}
          onTempCalendarUpdated={onTempCalendarUpdated}
          tempCalendar={tempCalendar}
          isOpenedEditCalendarDialog={isOpenedEditCalendarDialog}
        />
        <AddEventDialog
          addEvent={addEvent}
          onToggleAddEventDialog={onToggleAddEventDialog}
          onTempEventUpdated={onTempEventUpdated}
          tempEvent={tempEvent}
          isOpenedAddEventDialog={isOpenedAddEventDialog}
          calendars={calendars}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToggleAddCalendarDialog,
  onToggleAddEventDialog,
  onToggleEditCalendarDialog,
  onTempCalendarUpdated,
  onTempEventUpdated,
  getCalendars,
  addCalendar,
  editCalendar,
  deleteCalendar,
  getEvents,
  addEvent,
  getAllEvents
};

const mapStateToProps = state => ({
  ...state.calendar
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDialogsContainer);
