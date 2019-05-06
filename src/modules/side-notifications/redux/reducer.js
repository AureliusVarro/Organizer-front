// import { v4 } from 'uuid';
import * as actionTypes from './action-types';
// import { messagessLevel } from '../../../common/constants/common';

const initialState = [];
// const initialState = [
//   {
//     id: v4(),
//     level: messagessLevel.INFO,
//     message:
//       'INFO Lorem ipsum dolor sit amet, cr sit amet, consectetur adipiscing elit'
//   },
//   {
//     id: v4(),
//     level: messagessLevel.WARNING,
//     message:
//       'WARNING Lorem ipsum dolor sit amet, consectetur adipiscing elit,iscing elit'
//   },
//   {
//     id: v4(),
//     level: messagessLevel.SUCCESS,
//     message:
//       'SUCCESS Lorem ipsum dolor sit amet, consectetur adipiscing elit,iscing elit'
//   },
//   {
//     id: v4(),
//     level: messagessLevel.ERROR,
//     message:
//       'ERROR Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorelit'
//   },
//   {
//     id: v4(),
//     level: messagessLevel.INFO,
//     message:
//       'INFO Lorem ipsum dolor sit amet, cr sit amet, consectetur adipiscing elit'
//   },
//   {
//     id: v4(),
//     level: messagessLevel.WARNING,
//     message:
//       'WARNING Lorem ipsum dolor sit amet, consectetur adipiscing elit,iscing elit'
//   },
//   {
//     id: v4(),
//     level: messagessLevel.SUCCESS,
//     message:
//       'SUCCESS Lorem ipsum dolor sit amet, consectetur adipiscing elit,iscing elit'
//   },
//   {
//     id: v4(),
//     level: messagessLevel.ERROR,
//     message:
//       'ERROR Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorelit'
//   }
// ];

const sideNotifications = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIDE_NOTIFICATION_SHOW:
      return [action.payload, ...state];

    case actionTypes.SIDE_NOTIFICATION_CLOSE:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default sideNotifications;
