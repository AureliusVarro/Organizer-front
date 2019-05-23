import * as actionTypes from "./action-types";
import { defaultContact } from "../constants/defaults";

export const initialState = {
  isOpenedAddContactDialog: false,
  isOpenedEditContactDialog: false,
  tempContact: defaultContact,
  contacts: [],
  UPD: false
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_CONTACT_DIALOG:
      return {
        ...state,
        isOpenedAddContactDialog: !state.isOpenedAddContactDialog
      };

    case actionTypes.TOGGLE_EDIT_CONTACT_DIALOG:
      return {
        ...state,
        isOpenedEditContactDialog: !state.isOpenedEditContactDialog
      };

    case actionTypes.UPDATE_TEMP_CONTACT:
      return { ...state, tempContact: action.payload, UPD: !state.UPD };

    case actionTypes.GET_CONTACTS_SUCCESS:
      return { ...state, contacts: action.payload };

    case actionTypes.ADD_CONTACT_SUCCESS:
      return { ...state, isOpenedAddContactDialog: false };

    case actionTypes.EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        isOpenedEditContactDialog: false,
        tempContact: defaultContact
      };

    case actionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        isOpenedEditContactDialog: false,
        tempContact: defaultContact
      };

    default:
      return state;
  }
};

export default contacts;
