import { v4 } from 'uuid';
import * as actionTypes from './action-types';

export const closeSideNotificationById = id => ({
  type: actionTypes.SIDE_NOTIFICATION_CLOSE,
  payload: { id }
});

export const showSideNotification = (level, message) => ({
  type: actionTypes.SIDE_NOTIFICATION_SHOW,
  payload: { id: v4(), level, message }
});
