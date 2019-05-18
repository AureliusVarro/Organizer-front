import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AddContactDialog extends React.Component {
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
    console.log("onClose");
    this.props.onToggleAddContactDialog();
  };

  handleAddContact = () => {
    this.props.addContact(this.props.tempContact);
  };

  render() {
    return (
      <Dialog
        open={this.props.isOpenedAddContactDialog}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
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
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddContact} color="primary">
            Add Contact
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
