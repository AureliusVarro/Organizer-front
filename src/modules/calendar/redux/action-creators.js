export const editCalendar = () => {};

export const addCalendar = credentials => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.SIGN_IN_USER,
      body: JSON.stringify(credentials),
      headers: jsonRequestHeader,
      types: [
        actionTypes.USER_SIGN_IN_REQUEST,
        {
          type: actionTypes.USER_SIGN_IN_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              if (ls.set(tokenKey, json.Result.token)) {
                dispatch(getCurrentUser());
              }
            })
        },
        actionTypes.USER_SIGN_IN_FAILURE
      ]
    }
  });
