import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PrivateRoute from '../common/components/private-route/PrivateRoute';
import internalUrls from '../common/constants/internal-urls';

import HomePage from './home/HomePage';
import TodoPage from './todo/TodoPage';
import NotesPage from './notes/NotesPage';
import ContactsPage from './contacts/ContactsPage';

import SignInPageContainer from './sign-in/SignInPageContainer';
import SignUpPageContainer from './sign-up/SignUpPageContainer';
import NotFound from './not-found/NotFound';

const AppRouting = () => (
  <Switch>
    <Redirect exact from="/" to={internalUrls.HOME.path} />

    <PrivateRoute exact path={internalUrls.HOME.path} component={HomePage} />
    <PrivateRoute exact path={internalUrls.TODO.path} component={TodoPage} />
    <PrivateRoute exact path={internalUrls.NOTES.path} component={NotesPage} />
    <PrivateRoute
      exact
      path={internalUrls.CONTACTS.path}
      component={ContactsPage}
    />

    <Route
      exact
      path={internalUrls.SIGN_IN.path}
      component={SignInPageContainer}
    />
    <Route
      exact
      path={internalUrls.SIGN_UP.path}
      component={SignUpPageContainer}
    />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default withRouter(AppRouting);
