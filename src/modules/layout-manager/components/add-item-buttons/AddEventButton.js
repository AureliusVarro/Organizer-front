import React from "react";
import Button from "@material-ui/core/Button";

export default class AddEventButton extends React.Component {
  render() {
    const { onAddEventClick } = this.props;
    return (
      <Button onClick={onAddEventClick} color="inherit">
        Add Event
      </Button>
    );
  }
}
