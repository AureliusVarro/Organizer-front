import React from "react";
import { Button, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
      <Fab
        variant="extended"
        onClick={onAddEventClick}
        color="secondary"
        style={{ margin: "20px" }}
      >
        <AddIcon />
        {" Add Event  "}
      </Fab>
    );
  }

  if (pathname === internalUrls.TODO.path) {
    return (
      <Fab
        variant="extended"
        onClick={onAddTodoClick}
        color="secondary"
        style={{ margin: "20px" }}
      >
        <AddIcon />
        {"  Add Todo  "}
      </Fab>
    );
  }

  if (pathname === internalUrls.NOTES.path) {
    return (
      <Fab
        variant="extended"
        onClick={onAddNoteClick}
        color="secondary"
        style={{ margin: "20px" }}
      >
        <AddIcon />
        {"  Add Note  "}
      </Fab>
    );
  }

  if (pathname === internalUrls.CONTACTS.path) {
    return (
      <Fab
        variant="extended"
        onClick={onAddContactClick}
        color="secondary"
        style={{ margin: "20px" }}
      >
        <AddIcon />
        {"Add Contact"}
      </Fab>
    );
  }

  return null;
};

export default AddItemButtonsManager;
