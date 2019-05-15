import React from "react";

import AddEventButton from "./AddEventButton";
import AddTodoButton from "./AddTodoButton";
import AddNoteButton from "./AddNoteButton";
import AddContactButton from "./AddContactButton";

import internalUrls from "../../../../common/constants/internal-urls";

export default class AddItemButtonsManager extends React.Component {
  render() {
    const {
      pathname,
      onAddEventClick,
      onAddTodoClick,
      onAddNoteClick,
      onAddContactClick
    } = this.props;

    if (pathname === internalUrls.HOME.path) {
      return <AddEventButton onAddEventClick={onAddEventClick} />;
    } else if (pathname === internalUrls.TODO.path) {
      return <AddTodoButton onAddTodoClick={onAddTodoClick} />;
    } else if (pathname === internalUrls.NOTES.path) {
      return <AddNoteButton onAddNoteClick={onAddNoteClick} />;
    } else if (pathname === internalUrls.CONTACTS.path) {
      return <AddContactButton onAddContactClick={onAddContactClick} />;
    } else return null;
  }
}
