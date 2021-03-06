import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import MenuItem from "@material-ui/core/MenuItem";
import { blue } from "@material-ui/core/colors";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactsIcon from "@material-ui/icons/Contacts";
import NotesIcon from "@material-ui/icons/Notes";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import EventIcon from "@material-ui/icons/Event";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import internalUrls from "../../../common/constants/internal-urls";
import CalendarList from "../../calendar/components/CalendarList";
import TodoListList from "../../todo/components/TodoListList";
import NotebookList from "../../notebook/components/NotebookList";

import AddItemButtonsManager from "./add-item-buttons/AddItemButtonsManager";
import MenuListPopper from "./menu-list-popper/MenuListPopper";

const DRAWER_WIDTH_OPENED = 240;
const DRAWER_WIDTH_CLOSED = 60;

const styles = theme => ({
  rootLayout: {
    overflow: "hidden",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "fixed",
    display: "flex",
    flexDirection: "column"
  },
  logoTypography: {
    flexGrow: 1,
    fontSize: "1.7em !important"
  },
  appBar: {
    zIndex: 3,
    backgroundColor: blue[600]
  },
  opened: {
    width: DRAWER_WIDTH_OPENED,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  closed: {
    width: DRAWER_WIDTH_CLOSED,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  navItemTextBox: {
    whiteSpace: "nowrap"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  },
  menuButton: {
    marginRight: "20px"
  },
  userName: {
    paddingLeft: "10px"
  },
  toolbar: {
    paddingLeft: "3px",
    paddingRight: "10px"
  },
  dateTime: {
    padding: "17px",
    fontSize: "1.5em"
  },
  navLinkBtn: {
    "&.active": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  drawerRoot: {
    overflowX: "hidden",
    position: "static",
    backgroundColor: "#e5e5e5"
  },
  paperRoot: {
    overflowX: "hidden",
    position: "static",
    backgroundColor: "inherit"
  },
  content: {
    flexGrow: 1
  }
});

class MainLayout extends React.Component {
  state = {
    anchorEl: null
  };

  handleOpenUserMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseUserMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleAddTodo = () => {
    this.props.addTodo();
  };

  handleAddNote = () => {
    this.props.addNote();
  };

  render() {
    const {
      pathname,
      classes,
      children,
      onLogout,
      currentUser,
      isOpenedSidebar,
      onToggleSidebar,
      onToggleAddEventDialog,
      onToggleAddCalendarDialog,
      onToggleAddTodoListDialog,
      onToggleAddContactDialog,
      onToggleAddNotebookDialog
    } = this.props;

    const isOpenUserMenu = Boolean(this.state.anchorEl);

    return (
      <div className={classes.rootLayout}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={classes.menuButton}
              onClick={onToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h1"
              color="inherit"
              className={classes.logoTypography}
            >
              The Organizer
            </Typography>

            <Typography
              noWrap
              variant="h6"
              color="inherit"
              className={classes.dateTime}
            >
              {moment().format("MMM DD, YYYY")}
            </Typography>

            <Button
              aria-owns={isOpenUserMenu ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={this.handleOpenUserMenu}
              color="inherit"
            >
              <AccountCircleIcon />
              <span className={classes.userName}>{currentUser.name}</span>
            </Button>

            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={isOpenUserMenu}
              onClose={this.handleCloseUserMenu}
            >
              <MenuItem onClick={onLogout}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText inset primary="Logout" />
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <div className={classes.mainContainer}>
          <Drawer
            variant="permanent"
            open={isOpenedSidebar}
            classes={{ paper: classes.paperRoot }}
            className={classNames(classes.drawerRoot, {
              [classes.opened]: isOpenedSidebar,
              [classes.closed]: !isOpenedSidebar
            })}
          >
            {isOpenedSidebar && (
              <AddItemButtonsManager
                pathname={pathname}
                onAddEventClick={onToggleAddEventDialog}
                onAddTodoClick={this.handleAddTodo}
                onAddNoteClick={this.handleAddNote}
                onAddContactClick={onToggleAddContactDialog}
              />
            )}

            <Divider />
            <List component="nav">
              <ListItem
                button
                component={NavLink}
                to={internalUrls.HOME.path}
                className={classes.navLinkBtn}
              >
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                {isOpenedSidebar && (
                  <React.Fragment>
                    <ListItemText
                      className={classes.navItemTextBox}
                      primary={internalUrls.HOME.linkTitle}
                    />
                    {this.props.pathname === internalUrls.HOME.path && (
                      <ListItemSecondaryAction>
                        <MenuListPopper>
                          <CalendarList />
                        </MenuListPopper>
                      </ListItemSecondaryAction>
                    )}
                  </React.Fragment>
                )}
              </ListItem>

              <ListItem
                button
                component={NavLink}
                to={internalUrls.TODO.path}
                className={classes.navLinkBtn}
              >
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                {isOpenedSidebar && (
                  <React.Fragment>
                    <ListItemText
                      className={classes.navItemTextBox}
                      primary={internalUrls.TODO.linkTitle}
                    />
                    {this.props.pathname === internalUrls.TODO.path && (
                      <ListItemSecondaryAction>
                        <MenuListPopper>
                          <TodoListList />
                        </MenuListPopper>
                      </ListItemSecondaryAction>
                    )}
                  </React.Fragment>
                )}
              </ListItem>

              <ListItem
                button
                component={NavLink}
                to={internalUrls.NOTES.path}
                className={classes.navLinkBtn}
              >
                <ListItemIcon>
                  <NotesIcon />
                </ListItemIcon>
                {isOpenedSidebar && (
                  <React.Fragment>
                    <ListItemText
                      className={classes.navItemTextBox}
                      primary={internalUrls.NOTES.linkTitle}
                    />
                    {this.props.pathname === internalUrls.NOTES.path && (
                      <ListItemSecondaryAction>
                        <MenuListPopper>
                          <NotebookList />
                        </MenuListPopper>
                      </ListItemSecondaryAction>
                    )}
                  </React.Fragment>
                )}
              </ListItem>

              <ListItem
                button
                component={NavLink}
                to={internalUrls.CONTACTS.path}
                className={classes.navLinkBtn}
              >
                <ListItemIcon>
                  <ContactsIcon />
                </ListItemIcon>
                {isOpenedSidebar && (
                  <ListItemText
                    className={classes.navItemTextBox}
                    primary={internalUrls.CONTACTS.linkTitle}
                  />
                )}
              </ListItem>
            </List>
          </Drawer>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object,
  currentUser: PropTypes.object,
  isOpenedSidebar: PropTypes.bool,
  isOpenedAddEventDialog: PropTypes.bool,
  isOpenedAddCalendarDialog: PropTypes.bool,
  children: PropTypes.any
};

MainLayout.defaultProps = {
  currentUser: {},
  isOpenedSidebar: true,
  isOpenedAddEventDialog: false,
  isOpenedAddCalendarDialog: false,
  children: null
};

export default withStyles(styles)(MainLayout);
