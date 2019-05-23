export const API_PREFIX = `https://theorganizer.azurewebsites.net/api`;

const apiUrls = {
  // Users api
  SIGN_IN_USER: `${API_PREFIX}/users/authenticate`,
  SIGN_UP_USER: `${API_PREFIX}/users/register`,
  CURRENT_USER: `${API_PREFIX}/users/current`,

  // Calendars api
  ADD_CALENDAR: `${API_PREFIX}/calendars/add`,
  EDIT_CALENDAR: `${API_PREFIX}/calendars/edit`,
  GET_CALENDARS: `${API_PREFIX}/calendars/get`,
  DELETE_CALENDAR: `${API_PREFIX}/calendars/delete`,

  //Events api
  ADD_EVENT: `${API_PREFIX}/events/add`,
  GET_EVENTS: `${API_PREFIX}/events/listofevents`,
  EDIT_EVENT: `${API_PREFIX}/events/edit`,
  DELETE_EVENT: `${API_PREFIX}/events/delete`,

  //Todo List api
  ADD_TODOLIST: `${API_PREFIX}/todolists/add`,
  EDIT_TODOLIST: `${API_PREFIX}/todolists/edit`,
  DELETE_TODOLIST: `${API_PREFIX}/todolists/delete`,
  GET_TODOLISTS: `${API_PREFIX}/todolists/get`,

  //Todo api
  ADD_TODO: `${API_PREFIX}/todos/add`,
  EDIT_TODO: `${API_PREFIX}/todos/edit`,
  DELETE_TODO: `${API_PREFIX}/todos/delete`,
  GET_TODOS: `${API_PREFIX}/todos/getAll`,

  //Notebook api
  ADD_NOTEBOOK: `${API_PREFIX}/notebooks/add`,
  EDIT_NOTEBOOK: `${API_PREFIX}/notebooks/edit`,
  DELETE_NOTEBOOK: `${API_PREFIX}/notebooks/delete`,
  GET_NOTEBOOKS: `${API_PREFIX}/notebooks/get`,

  //Note api
  ADD_NOTE: `${API_PREFIX}/notes/add`,
  EDIT_NOTE: `${API_PREFIX}/notes/edit`,
  DELETE_NOTE: `${API_PREFIX}/notes/delete`,
  GET_NOTES: `${API_PREFIX}/notes/getAll`,

  //Contact api
  ADD_CONTACT: `${API_PREFIX}/contacts/add`,
  EDIT_CONTACT: `${API_PREFIX}/contacts/edit`,
  DELETE_CONTACT: `${API_PREFIX}/contacts/delete`,
  GET_CONTACTS: `${API_PREFIX}/contacts`
};

export default apiUrls;
