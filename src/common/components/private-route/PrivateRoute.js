import React from "react";
import ls from "local-storage";
import { Route, Redirect } from "react-router-dom";

import internalUrls from "../../constants/internal-urls";
import { tokenKey } from "../../constants/common";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !!ls.get(tokenKey) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: internalUrls.SIGN_IN.path,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
