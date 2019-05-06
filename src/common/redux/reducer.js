import actionTypes from './action-types';
import { processingStatuses } from '../constants/common';

const initialState = {
  signinUserStatus: processingStatuses.INITIAL,
  registrationUserStatus: processingStatuses.INITIAL,
  loadCurrentUserStatus: processingStatuses.INITIAL,
  currentUser: {
    email: '',
    name: ''
  }
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN_REQUEST:
      return { ...state, signinUserStatus: processingStatuses.PENDING };

    case actionTypes.GET_CURRENT_USER_REQUEST:
      return { ...state, loadCurrentUserStatus: processingStatuses.PENDING };

    case actionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loadCurrentUserStatus: processingStatuses.SUCCESS,
        currentUser: action.payload
      };

    case actionTypes.USER_SIGN_IN_SUCCESS:
      return { ...state, signinUserStatus: processingStatuses.SUCCESS };

    case actionTypes.USER_SIGN_IN_FAILURE:
      return { ...state, signinUserStatus: processingStatuses.FAILURE };

    case actionTypes.GET_CURRENT_USER_FAILURE:
      return { ...state, loadCurrentUserStatus: processingStatuses.FAILURE };

    case actionTypes.USER_SIGN_UP_REQUEST:
      return { ...state, registrationUserStatus: processingStatuses.PENDING };

    case actionTypes.USER_SIGN_UP_SUCCESS:
      return { ...state, registrationUserStatus: processingStatuses.SUCCESS };

    case actionTypes.USER_SIGN_UP_FAILURE:
      return { ...state, registrationUserStatus: processingStatuses.FAILURE };

    case actionTypes.RESET_CURRENT_USER:
      return {
        ...state,
        registrationUserStatus: processingStatuses.INITIAL,
        loadCurrentUserStatus: processingStatuses.INITIAL,
        currentUser: {
          email: '',
          name: ''
        }
      };

    default:
      return state;
  }
};

export default common;
