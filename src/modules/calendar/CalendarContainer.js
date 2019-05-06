import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = state => {};

const mapDispatchToProps = {};

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);

export default CalendarContainer;
