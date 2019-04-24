import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from '../../../common/actions/types';
import setAuthToken from '../../../setAuthToken';
import { RSAA } from 'redux-api-middleware';
import jwt_decode from 'jwt-decode';

export const loginUser = (user) => (dispatch, getState) => dispatch({
    /*axios.post('https://theorganizer.azurewebsites.net/api/users/authenticate', user)
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
            });*/

        
        [RSAA]: {
        endpoint: 'https://theorganizer.azurewebsites.net/api/users/authenticate',
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
        types: ['LOGIN_REQUEST', 
            {
                type: 'LOGIN_SUCCESS',
                payload: (action, state, res)=> res.json().then(json => json)
                /*{
                    res.json().then(res => {
                        console.log(res);
                        const { token } = res;
                        localStorage.setItem('jwtToken', token);
                        setAuthToken(token);
                        const decoded = jwt_decode(token);
                        dispatch(setCurrentUser(decoded));
                    })
                }*/
            }, 'LOGIN_FAILURE']
        }
            
});

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

/*export const getCurrentUserInfo = () => (dispatch, getState) => dispatch({
    [RSAA]: {
      method: 'GET',
      credentials: 'include',
      endpoint: api.CURRENT_USER,
      types: [
        actionTypes.GET_CURRENT_USER_INFO_REQUEST,
        {
          type: actionTypes.GET_CURRENT_USER_INFO_SUCCESS,
          payload: (action, state, res) => getJSON(res).then(json => json)
        },
        actionTypes.GET_CURRENT_USER_INFO_FAILURE
      ]
    }
  });*/