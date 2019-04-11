import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from '../../../common/actions/types';
import setAuthToken from '../../../setAuthToken';
import jwt_decode from 'jwt-decode';


export const loginUser = (user) => dispatch => {
    axios.post('https://agrotest.herokuapp.com/api/auth', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

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