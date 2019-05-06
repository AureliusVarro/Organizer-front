export const API_PREFIX = `https://theorganizer.azurewebsites.net/api`;

const apiUrls = {
  // Users api
  SIGN_IN_USER: `${API_PREFIX}/users/authenticate`,
  SIGN_UP_USER: `${API_PREFIX}/users/register`,
  CURRENT_USER: `${API_PREFIX}/users/current`

  // Some another api
  // ...
};

export default apiUrls;
