import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContasctThunk } from 'store/contacts/operations';
import { BtnDelete, ItemContact } from './StyledListItem';
import { MdOutlineDeleteForever } from 'react-icons/md';

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ItemContact>
      <div>
        <b>{name}: </b>
        <i>{number}</i>
      </div>

      <BtnDelete
        type="button"
        onClick={() => dispatch(deleteContasctThunk(id))}
      >
        <MdOutlineDeleteForever size={40} color="tomato" />
      </BtnDelete>
    </ItemContact>
  );
};
