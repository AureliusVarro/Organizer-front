import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends Component {

  constructor(){
    super();
    this.state = {
      events: [
        {
          title: "test",
          start: new Date(2015, 3, 1),
          end: new Date(2015, 3, 10),
          allDay: true,
          resource: null
        }
      ],
      height: 0
    }
      
  }

  refCallback = element => {
    if (element) {
      const elHeight = element.getBoundingClientRect()
      if(elHeight!=this.state.height)
        this.setState({height: elHeight});
    }
  };

  componentDidMount() {
  }

  render(){
    return(
      <div >
          <BigCalendar
            localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            style={{height:600}}
          />
      </div>
    )
  }
}

export default Calendar

