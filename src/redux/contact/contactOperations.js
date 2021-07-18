import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  return axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  return axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContacts = contactId => dispatch => {
  dispatch(deleteContactRequest());

  return axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

// eslint-disable-next-line
export default { addContact, deleteContacts, fetchContacts };
