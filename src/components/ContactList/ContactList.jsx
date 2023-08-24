import React from 'react';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';
import { contactsSelector, filterSelector } from 'store/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);

  const filter = useSelector(filterSelector);

  const totalNumberOfContacts = contacts.contacts.length;

  const normalizeName = filter.toLowerCase();

  const visibleContacts = contacts.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizeName);
  });

  return totalNumberOfContacts > 0 ? (
    <ul className={css.contactItems}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There is no such contact in your phonebook!</p>
  );
};
