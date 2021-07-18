import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactOperations from '../../redux/contact/contactOperations';
import s from './ContactList.module.css';
import { getVisibleContacts } from '../../redux/contact/contactSelectors';

class ContactList extends Component {
  state = {};

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <>
        <ul className={s.users}>
          {this.props.contacts.length > 0 &&
            this.props.contacts.map(({ id, name, number }) => (
              <li className={s.userInfo} key={id}>
                <p>
                  {name} : {number}
                </p>
                <button
                  className={s.removeContactButton}
                  onClick={() => this.props.deleteContact(id)}
                >
                  удалить
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactOperations.deleteContacts(id)),
  getContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
