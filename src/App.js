import React from 'react';

import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="phonebookHeader">Phonebook</h1>
      <ContactForm />

      <h2 className="contactsHeader">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
