import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from '../../../common/actions/types';
import setAuthToken from '../../../setAuthToken';
import jwt_decode from 'jwt-decode';

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}