import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');






/*import { v4 as uuidv4 } from "uuid";


export const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/filter");*/

/*export const addContact = (name, number) => ({
  type: "phoneBook/addContact",
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = (contactId) => ({
  type: "phoneBook/deleteContact",
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: "phoneBook/changeFilter",
  payload: value,
});*/
