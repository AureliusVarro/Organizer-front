import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from './actions/logout';
import { withRouter } from 'react-router-dom';
import { NavDropdown, NavbarBrand } from 'react-bootstrap'

class Navbar extends Component {
    
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        //let adminTools = null;
        //if(user.isAdmin){
        //    adminTools = (<NavDropdown.Item href="/admin">Admin</NavDropdown.Item>)
        //}
        //console.log("user", user.isAdmin)
        const authLinks = (
            <ul className="nav navbar-nav ml-auto">
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">Settings</NavDropdown.Item>
                </NavDropdown>
                <li className="nav-item">
                    <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                        <img src={user.avatar||"http://www.gravatar.com/avatar"} alt={user.name} title={user.name}
                            className="rounded-circle"
                            style={{ width: '25px', marginRight: '5px'}} />
                             Logout
                    </a>
                </li>
                
            </ul>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In</Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavbarBrand href="/?mode=view">Organizer</NavbarBrand>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));