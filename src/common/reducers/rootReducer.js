import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from '../../components/login/reducers/authReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer
});