import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Calendar from "./Calendar/Calendar";
import SideMenu from "./SideMenu/SideMenu";
import Grid from "@material-ui/core/Grid";
import { renderToStaticMarkup } from "react-dom/server";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <Route exact path="/" component={SideMenu} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
