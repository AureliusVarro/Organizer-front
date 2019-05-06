import React from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.scss';

moment.locale('en-gb');
const localizer = BigCalendar.momentLocalizer(moment);

const DnDBigCalendar = withDragAndDrop(BigCalendar);

class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [
        {
          id: 7,
          title: 'Lunch',
          start: new Date(2019, 4, 1, 12, 0, 0, 0),
          end: new Date(2019, 4, 1, 13, 0, 0, 0),
          desc: 'Power lunch'
        },
        {
          id: 8,
          title: 'Meeting',
          start: new Date(2019, 4, 1, 14, 0, 0, 0),
          end: new Date(2019, 4, 1, 15, 0, 0, 0)
        },
        {
          id: 9,
          title: 'Happy Hour',
          start: new Date(2019, 4, 1, 17, 0, 0, 0),
          end: new Date(2019, 4, 1, 17, 30, 0, 0),
          desc: 'Most important meal of the day'
        }
      ]
    };
  }

  onEventResize = eventProps => {
    console.log(eventProps);
  };

  onEventDrop = eventProps => {
    console.log(eventProps);
  };

  handleSelectEventSlot = calendarProos => {
    console.log(calendarProos);
  };

  handleSelectEvent = eventProps => {
    console.log(eventProps);
  };

  render() {
    return (
      <DnDBigCalendar
        selectable
        resizable
        events={this.state.events}
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
