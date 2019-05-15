import React from "react";
import { connect } from "react-redux";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import {
  IconButton,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Divider
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  onToggleEditContactDialog,
  onTempContactUpdated,
  getContacts,
  editContact,
  deleteContact
} from "./redux/action-creators";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  indent: {
    marginLeft: "32px"
  },
  margin: { margin: 0 }
});

class ContactsList extends React.Component {
  state = {
    open: false
  };

  handleDeleteContact = item => event => {
    this.props.deleteContact(item);
  };

  toggleEditContactDialog = item => event => {
    this.props.onTempContactUpdated({
      id: item.id,
      name: item.name,
      email: item.email,
      phoneNumber: item.phoneNumber
    });
    this.props.onToggleEditContactDialog();
  };

  trimTitle = title => {
    if (title) {
      if (title.length <= 14) return title;
      else return title.substring(0, 14) + "...";
    } else return "NULL";
  };

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        {this.props.contacts.map((item, index) => (
          <div className={classes.indent} key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <div>
                      <Typography
                        component="span"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {"Email: "}
                      </Typography>
                      {item.email}
                    </div>
                    <div>
                      <Typography
                        component="span"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {"Phone: "}
                      </Typography>
                      {item.phoneNumber}
                    </div>
                  </React.Fragment>
                }
              />

              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Edit"
                  onClick={this.toggleEditContactDialog(item)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="Edit"
                  onClick={this.handleDeleteContact(item)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    );
  }
}

const mapDispatchToProps = {
  onToggleEditContactDialog,
  onTempContactUpdated,
  getContacts,
  editContact,
  deleteContact
};

const mapStateToProps = state => ({
  ...state.contacts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ContactsList));
