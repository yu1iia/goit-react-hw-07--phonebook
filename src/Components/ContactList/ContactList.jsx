import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      contacts.length > 0 && (
        <ul className={s.users}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li className={s.contact_list} key={id}>
                <p>
                  {name} : {number}
                </p>
                <button
                  className={s.removeContactButton}
                  type="button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )
    );
  }
}

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
