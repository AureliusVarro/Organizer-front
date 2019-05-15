import React from "react";
import Button from "@material-ui/core/Button";

export default class AddTodoButton extends React.Component {
  render() {
    const { onAddTodoClick } = this.props;
    return (
      <Button onClick={onAddTodoClick} color="inherit">
        Add Todo
      </Button>
    );
  }
}
