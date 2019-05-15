import React from "react";
import Button from "@material-ui/core/Button";

export default class AddNoteButton extends React.Component {
  render() {
    const { onAddNoteClick } = this.props;
    return (
      <Button onClick={onAddNoteClick} color="inherit">
        Add Note
      </Button>
    );
  }
}
