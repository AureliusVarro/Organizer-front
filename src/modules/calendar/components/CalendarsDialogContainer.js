import React from "react";
import { connect } from "react-redux";

import {
  onToggleAddCalendarDialog,
  onToggleAddEventDialog,
  onToggleEditCalendarDialog,
  onToggleEditEventDialog,
  onTempCalendarUpdated,
  onTempEventUpdated,
  getCalendars,
  addCalendar,
  editCalendar,
  deleteCalendar,
  getEvents,
  addEvent,
  editEvent,
  deleteEvent
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
      onToggleEditEventDialog,
      onTempCalendarUpdated,
      onTempEventUpdated,
      getCalendars,
      addCalendar,
      editCalendar,
      deleteCalendar,
      getEvents,
      addEvent,
      editEvent,
      deleteEvent,

      //state
      tempCalendar,
      tempEvent,
      isOpenedAddCalendarDialog,
      isOpenedEditCalendarDialog,
      isOpenedAddEventDialog,
      isOpenedEditEventDialog,
      calendars
    } = this.props;
    return (
      <React.Fragment>
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
        <EditEventDialog
          editEvent={editEvent}
          deleteEvent={deleteEvent}
          onToggleEditEventDialog={onToggleEditEventDialog}
          onTempEventUpdated={onTempEventUpdated}
          tempEvent={tempEvent}
          isOpenedEditEventDialog={isOpenedEditEventDialog}
          calendars={calendars}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  onToggleAddCalendarDialog,
  onToggleAddEventDialog,
  onToggleEditCalendarDialog,
  onToggleEditEventDialog,
  onTempCalendarUpdated,
  onTempEventUpdated,
  getCalendars,
  addCalendar,
  editCalendar,
  deleteCalendar,
  getEvents,
  addEvent,
  editEvent,
  deleteEvent
};

const mapStateToProps = state => ({
  ...state.calendars
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDialogsContainer);
