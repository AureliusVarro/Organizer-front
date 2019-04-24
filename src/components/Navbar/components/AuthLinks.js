import React, { Component } from "react";

class AuthLinks extends Component {
  render() {
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
    </ul>;
  }
}
