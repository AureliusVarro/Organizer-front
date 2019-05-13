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

    this.state = {
      events: [
        {
          id: 7,
          title: "Lunch",
          start: "2011-10-05T14:48:00.000Z",
          end: new Date(2019, 4, 1, 13, 0, 0, 0),
          desc: "Power lunch"
        },
        {
          id: 8,
          title: "Meeting",
          start: new Date(2019, 4, 1, 14, 0, 0, 0),
          end: new Date(2019, 4, 1, 15, 0, 0, 0)
        },
        {
          id: 9,
          title: "Happy Hour",
          start: new Date(2019, 4, 1, 17, 0, 0, 0),
          end: new Date(2019, 4, 1, 17, 30, 0, 0),
          desc: "Most important meal of the day"
        }
      ]
    };
  }

  onEventResize = eventProps => {
    console.log("onEventResize: ", eventProps);
  };

  onEventDrop = eventProps => {
    console.log("onEventDrop: ", eventProps);
  };

  handleSelectEventSlot = calendarProps => {
    let updTempEvent = this.props.tempEvent;
    updTempEvent.start = calendarProps.start.toISOString();
    updTempEvent.end = calendarProps.end.toISOString();
    console.log("handleSelectEventSlot: ", updTempEvent);
    this.props.onTempEventUpdated(updTempEvent);
    this.props.onToggleAddEventDialog();
  };

  handleSelectEvent = eventProps => {
    console.log("handleSelectEvent: ", eventProps);
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
