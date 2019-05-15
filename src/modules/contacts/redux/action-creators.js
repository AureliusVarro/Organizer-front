import { RSAA, getJSON } from "redux-api-middleware";

import * as actionTypes from "./action-types";
import apiUrls from "../../../common/constants/api-urls";
import { jsonRequestHeader } from "../../../common/constants/common";

export const onToggleAddContactDialog = () => ({
  type: actionTypes.TOGGLE_ADD_CONTACT_DIALOG
});
export const onToggleEditContactDialog = () => ({
  type: actionTypes.TOGGLE_EDIT_CONTACT_DIALOG
});

export const onTempContactUpdated = tempContactData => ({
  type: actionTypes.UPDATE_TEMP_CONTACT,
  payload: tempContactData || {
    title: "New Contact"
  }
});

export const getContacts = () => dispatch =>
  dispatch({
    [RSAA]: {
      method: "GET",
      endpoint: apiUrls.GET_CONTACTS,
      headers: jsonRequestHeader,
      types: [
        actionTypes.GET_CONTACTS_REQUEST,
        actionTypes.GET_CONTACTS_SUCCESS,
        actionTypes.GET_CONTACTS_FAILURE
      ]
    }
  });

export const addContact = contactData => dispatch =>
  dispatch({
    [RSAA]: {
      method: "POST",
      endpoint: apiUrls.ADD_CONTACT,
      body: JSON.stringify(contactData),
      headers: jsonRequestHeader,
      types: [
        actionTypes.ADD_CONTACT_REQUEST,
        {
          type: actionTypes.ADD_CONTACT_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getContacts());
            })
        },
        actionTypes.ADD_CONTACT_FAILURE
      ]
    }
  });

export const editContact = contact => dispatch =>
  dispatch({
    [RSAA]: {
      method: "PUT",
      endpoint: apiUrls.EDIT_CONTACT,
      body: JSON.stringify(contact),
      headers: jsonRequestHeader,
      types: [
        actionTypes.EDIT_CONTACT_REQUEST,
        {
          type: actionTypes.EDIT_CONTACT_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getContacts());
            })
        },
        actionTypes.EDIT_CONTACT_FAILURE
      ]
    }
  });

export const deleteContact = contact => dispatch =>
  dispatch({
    [RSAA]: {
      method: "DELETE",
      endpoint: apiUrls.DELETE_CONTACT + "/" + contact.id,
      headers: jsonRequestHeader,
      types: [
        actionTypes.DELETE_CONTACT_REQUEST,
        {
          type: actionTypes.DELETE_CONTACT_SUCCESS,
          payload: (action, state, res) =>
            getJSON(res).then(json => {
              dispatch(getContacts());
            })
        },
        actionTypes.DELETE_CONTACT_FAILURE
      ]
    }
  });
