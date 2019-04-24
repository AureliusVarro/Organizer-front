import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from '../../../common/actions/types';
import setAuthToken from '../../../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('https://theorganizer.azurewebsites.net/api/users/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}