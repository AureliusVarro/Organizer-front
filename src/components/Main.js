import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Register from './register/Register';
import Login from './login/Login';
import { renderToStaticMarkup } from "react-dom/server";

class Main extends Component {

    render() {
        return (
            <Router>
            <div>
              <Navbar />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                </div>
            </div>
          </Router>
        )
    }
}

export default Main;