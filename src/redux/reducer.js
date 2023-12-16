import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, setFilter } from './action';

const storedContacts = localStorage.getItem('contacts');
const contactsInitialState = storedContacts ? JSON.parse(storedContacts) : [];
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addNewContact, (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    })
    .addCase(deleteContact, (state, action) => {
      const newState = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    });
});

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(setFilter, (_, action) => {
    return action.payload;
  });
});
