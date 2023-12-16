import { combineReducers } from 'redux';
import contactsReducer from './redux/contactsSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: (state = '', action) => {
    if (action.type === 'contacts/setFilter') {
      return action.payload;
    }
    return state;
  },
});

export default reducer;
