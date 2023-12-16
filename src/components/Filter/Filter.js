import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/action';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const newFilter = e.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <>
      <div className={css.filterContacts}>
        <label>Find contacts by name or phone number</label>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Filter;
