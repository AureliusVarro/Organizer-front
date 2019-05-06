import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { apiMiddleware } from 'redux-api-middleware';
import apiAuthInjector from './common/middlewares/api-auth-injector';
import apiErrorMiddleware from './common/middlewares/api-error';

import rootReducer from './root-reducer';

const configureStore = history => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        apiAuthInjector,
        thunk,
        apiMiddleware,
        apiErrorMiddleware
      )
    )
  );

  if (module.hot) {
    // in console > window.store.getState();
    window.store = store;
  }

  return store;
};

export default configureStore;
