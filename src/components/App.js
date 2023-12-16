import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from './redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const addContactHandler = newContact => {
    const loweredCase = newContact.name.toLowerCase().trim();
    const exists = contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ContactForm addContact={addContactHandler} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContactHandler}
      >
        <Filter filter={filter} addFilter={handleFilterChange} />
      </ContactList>
    </div>
  );
};

export default App;
