import { showSideNotification } from '../../modules/side-notifications/redux/action-creators';
import { messagessLevel } from '../../common/constants/common';

/*
Error model
{
  status: number
  message: string
}
*/

const apiErrorMiddleware = ({ dispatch, getState }) => next => action => {
  const payload = action.payload;

  if (payload && payload.status && payload.message) {
    if (!(payload.status >= 200 && payload.status < 300)) {
      dispatch(showSideNotification(messagessLevel.ERROR, payload.message));
    }
  }

  return next(action);
};

export default apiErrorMiddleware;
