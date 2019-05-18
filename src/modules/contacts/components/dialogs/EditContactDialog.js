import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class EditContactrDialog extends React.Component {
  handleContactNameChange = name => {
    let updTempContact = this.props.tempContact;
    updTempContact.name = name.target.value;
    this.props.onTempContactUpdated(updTempContact);
  };

  handleContactEmailChange = email => {
    let updTempContact = this.props.tempContact;
    updTempContact.email = email.target.value;
    this.props.onTempContactUpdated(updTempContact);
  };

  handleContactPhoneNumberChange = phoneNumber => {
    let updTempContact = this.props.tempContact;
    updTempContact.phoneNumber = phoneNumber.target.value;
    this.props.onTempContactUpdated(updTempContact);
  };

  handleClose = () => {
    this.props.onToggleEditContactDialog();
  };

  handleEditContact = () => {
    this.props.editContact(this.props.tempContact);
  };

  handleDeleteContact = () => {
    this.props.deleteContact(this.props.tempContact);
  };

  render() {
    return (
      <Dialog
        open={this.props.isOpenedEditContactDialog}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="contactName"
            label="Name"
            fullWidth
            value={this.props.tempContact.name}
            onChange={this.handleContactNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contactEmail"
            label="Email"
            fullWidth
            value={this.props.tempContact.email}
            onChange={this.handleContactEmailChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contactPhoneNumber"
            label="Phone Number"
            fullWidth
            value={this.props.tempContact.phoneNumber}
            onChange={this.handleContactPhoneNumberChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDeleteContact} color="secondary">
            Delete
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleEditContact} color="primary">
            Edit Contact
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
