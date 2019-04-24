import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from './common/reducers/rootReducer';
import apiAuthInjector from './common/middleware/apiAuthInjector';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        compose(applyMiddleware(apiAuthInjector, apiMiddleware, thunk), 
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;