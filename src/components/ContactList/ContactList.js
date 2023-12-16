import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <p>Find contact by name</p>
      {children}
      <ul className={css.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactsItem} key={id}>
            <p className={css.contactsName}>{name}</p>
            <p className={css.contactsNumber}>{number}</p>
            <button
              onClick={() => handleDeleteContact(id)}
              className={css.contactsBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
