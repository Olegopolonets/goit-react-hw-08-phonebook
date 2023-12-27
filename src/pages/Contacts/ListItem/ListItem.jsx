import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContasctThunk } from 'store/contacts/operations';
import { BtnDelete, ItemContact } from './StyledListItem';

export const ListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <ItemContact>
      <div>
        <b>{name}: </b>
        <i>{phone}</i>
      </div>

      <BtnDelete
        type="button"
        onClick={() => dispatch(deleteContasctThunk(id))}
      >
        Delete
      </BtnDelete>
    </ItemContact>
  );
};
