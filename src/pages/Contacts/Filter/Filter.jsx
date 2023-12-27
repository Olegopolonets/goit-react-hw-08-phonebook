import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../store/contacts/phonebookSlice.js';
import { InputFilter } from './StyledFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <InputFilter onChange={handleFilter} type="text" placeholder="Search" />
  );
};
