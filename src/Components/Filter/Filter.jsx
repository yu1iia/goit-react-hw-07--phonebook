import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/selectors';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <label className={s.filter_label}>
      Filter
      <input
        className={s.filter_input}
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
      />
    </label>
  </>
);

Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
