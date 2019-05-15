import React from "react";
import Button from "@material-ui/core/Button";

import internalUrls from "../../../../common/constants/internal-urls";

const AddItemButtonsManager = ({
  pathname,
  onAddEventClick,
  onAddTodoClick,
  onAddNoteClick,
  onAddContactClick
}) => {
  if (pathname === internalUrls.HOME.path) {
    return (
      <Button onClick={onAddEventClick} color="inherit">
        Add Event
      </Button>
    );
  }

  if (pathname === internalUrls.TODO.path) {
    return (
      <Button onClick={onAddTodoClick} color="inherit">
        Add Todo
      </Button>
    );
  }

  if (pathname === internalUrls.NOTES.path) {
    return (
      <Button onClick={onAddNoteClick} color="inherit">
        Add Note
      </Button>
    );
  }

  if (pathname === internalUrls.CONTACTS.path) {
    return (
      <Button onClick={onAddContactClick} color="inherit">
        Add Contact
      </Button>
    );
  }

  return null;
};

export default AddItemButtonsManager;
