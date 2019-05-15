import React from "react";
import Button from "@material-ui/core/Button";

export default class AddContactButton extends React.Component {
  render() {
    const { onAddContactClick } = this.props;
    return (
      <Button onClick={onAddContactClick} color="inherit">
        Add Contact
      </Button>
    );
  }
}
