import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import {
  setCurrentUser,
  logoutUser
} from "./components/Navbar/redux/action-creators";

import { LocalizeProvider } from "react-localize-redux";

import Main from "./components/Main";

import "bootstrap/dist/css/bootstrap.min.css";

//TODO: remove this
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocalizeProvider>
          <Main />
        </LocalizeProvider>
      </Provider>
    );
  }
}

export default App;
