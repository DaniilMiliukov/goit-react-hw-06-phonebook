import React from 'react';
import { removeContact } from 'store/contactsSlice';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
