import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

import { connect } from 'react-redux';
import contactOerations from '../../redux/contact/contactOperations';
import { getAllContacts } from '../../redux/contact/contactSelectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeData = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  checkContact = name => {
    const contacts = this.props.contacts;

    const normalizeName = name.toLowerCase();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizeName,
    );
  };

  submitContact = e => {
    const { name } = this.state;
    e.preventDefault();

    if (this.checkContact(name)) {
      alert(`${name} is already in contact`);
      return;
    }

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitContact}>
        <label className={s.form_label}>
          Name
          <input
            className={s.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.changeData}
          />
        </label>
        <label className={s.form_label}>
          Number
          <input
            className={s.form_input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.changeData}
          />
        </label>
        <button type="submit" className={s.addButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactOerations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
