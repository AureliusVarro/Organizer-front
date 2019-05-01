import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getCurrentUser } from "./redux/action-creators";
import { withRouter } from "react-router-dom";
import { NavDropdown, NavbarBrand } from "react-bootstrap";
import GuestLinks from "./components/GuestLinks";

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  componentDidUpdate() {
    this.props.getCurrentUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log("user:", user.name);

    const authLinks = (
      <ul className="nav navbar-nav ml-auto">
        <NavDropdown title="Settings" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">Settings</NavDropdown.Item>
        </NavDropdown>
        <li className="nav-item">
          <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
            <img
              src={user.avatar || "http://www.gravatar.com/avatar"}
              alt={user.name}
              title={user.name}
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
            />
            Logout
          </a>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavbarBrand href="/?mode=view">Organizer</NavbarBrand>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isAuthenticated ? authLinks : <GuestLinks />}
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, getCurrentUser }
)(withRouter(Navbar));
