import * as actionTypes from './action-types';

export const initialState = {
  isOpenedSidebar: true
};

const layoutManager = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAIN_LAYOUT_TOGGLE_SIDEBAR:
      return { ...state, isOpenedSidebar: !state.isOpenedSidebar };

    default:
      return state;
  }
};

export default layoutManager;
