import React from "react";
import moment from "moment";
import "moment/locale/en-gb";
import BigCalendar from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";

moment.locale("en-gb");
const localizer = BigCalendar.momentLocalizer(moment);

const DnDBigCalendar = withDragAndDrop(BigCalendar);

class Calendar extends React.Component {
  constructor() {
    super();
  }

  onEventResize = eventProps => {
    let updTempEvent = eventProps.event;
    updTempEvent.start = eventProps.start;
    updTempEvent.end = eventProps.end;
    console.log("onEventResize: ", eventProps);
    this.props.editEvent(updTempEvent);
  };

  onEventDrop = eventProps => {
    let updTempEvent = eventProps.event;
    updTempEvent.start = eventProps.start;
    updTempEvent.end = eventProps.end;
    console.log("onEventDrop: ", eventProps);
    this.props.editEvent(updTempEvent);
  };

  handleSelectEventSlot = eventProps => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.start = eventProps.start;
    updTempEvent.end = eventProps.end;
    console.log("handleSelectEventSlot: ", updTempEvent);
    this.props.onTempEventUpdated(updTempEvent);
    this.props.onToggleAddEventDialog();
  };

  handleSelectEvent = eventProps => {
    console.log("handleSelectEvent: ", eventProps);
    this.props.onTempEventUpdated(Object.assign(eventProps));
    this.props.onToggleEditEventDialog();
  };

  render() {
    return (
      <DnDBigCalendar
        selectable
        resizable
        events={this.props.events}
        defaultView={BigCalendar.Views.MONTH}
        onSelectEvent={this.handleSelectEvent}
        onSelectSlot={this.handleSelectEventSlot}
        localizer={localizer}
        defaultDate={new Date()}
        onEventDrop={this.onEventDrop}
        onEventResize={this.onEventResize}
        culture="en-gb"
        className="root-big-calendar"
        startAccessor="start"
        endAccessor="end"
      />
    );
  }
}

export default Calendar;
