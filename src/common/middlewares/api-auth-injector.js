import ls from "local-storage";
import { RSAA } from "redux-api-middleware";

import { tokenKey } from "../constants/common";

export default store => next => action => {
  const callApi = action[RSAA];

  if (callApi) {
    callApi.headers = Object.assign({}, callApi.headers, {
      Authorization: `Bearer ${ls.get(tokenKey)}` || ""
    });
  }

  return next(action);
};
