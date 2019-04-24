import { RSAA } from "redux-api-middleware";
import ls from "local-storage";

export default function() {
  return function(next) {
    return function(action) {
      const callApi = action[RSAA];

      // Check if this action is a redux-api-middleware action.
      if (callApi) {
        // Inject the Authorization header from localStorage.
        callApi.headers = Object.assign({}, callApi.headers, {
          Authorization: ls.get("id_token") || ""
        });
      }

      // Pass the FSA to the next action.
      return next(action);
    };
  };
}
