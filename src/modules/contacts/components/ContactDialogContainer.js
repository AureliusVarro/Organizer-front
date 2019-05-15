import React from "react";
import { connect } from "react-redux";

import {
  onToggleAddContactDialog,
  onToggleEditContactDialog,
  onTempContactUpdated,
  getContacts,
  addContact,
  editContact,
  deleteContact
} from "../redux/action-creators";

import AddContactDialog from "./dialogs/AddContactDialog";
import EditContactDialog from "./dialogs/EditContactDialog";

class ContactDialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const {
      onToggleAddContactDialog,
      onToggleEditContactDialog,
      onTempContactUpdated,
      getContacts,
      addContact,
      editContact,
      deleteContact,

      //state
      tempContact,
      isOpenedAddContactDialog,
      isOpenedEditContactDialog
    } = this.props;
    return (
      <React.Fragment>
        <AddContactDialog
          addContact={addContact}
          onToggleAddContactDialog={onToggleAddContactDialog}
          onTempContactUpdated={onTempContactUpdated}
          tempContact={tempContact}
          isOpenedAddContactDialog={isOpenedAddContactDialog}
        />
        <EditContactDialog
          editContact={editContact}
          deleteContact={deleteContact}
          onToggleEditContactDialog={onToggleEditContactDialog}
          onTempContactUpdated={onTempContactUpdated}
          tempContact={tempContact}
          isOpenedEditContactDialog={isOpenedEditContactDialog}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  onToggleAddContactDialog,
  onToggleEditContactDialog,
  onTempContactUpdated,
  getContacts,
  addContact,
  editContact,
  deleteContact
};

const mapStateToProps = state => ({
  ...state.contacts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDialogsContainer);
