import React, { useEffect } from 'react';
import { ListItem } from '../ListItem/ListItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContasctsThunk } from '../../../store/contacts/operations.js';
import { FallingLines } from 'react-loader-spinner';
import {
  getContacts,
  getFilter,
  SelectLoading,
  SelectError,
} from '../../../store/contacts/selector.js';
import {
  ContactsList,
  LoaderWrapper,
  MessageNotContacts,
} from './StyledContactList.jsx';
import Loader from 'components/Loader/Loader.jsx';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(SelectLoading);
  const error = useSelector(SelectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContasctsThunk());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase() || '')
  );

  console.log(contacts);
  return (
    <>
      {filteredContacts.length === 0 ? (
        <MessageNotContacts>No contacts match your search</MessageNotContacts>
      ) : (
        <ContactsList>
          {filteredContacts.map(({ id, name, number }) => (
            <ListItem key={id} id={id} name={name} number={number} />
          ))}
        </ContactsList>
      )}
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </>
  );
};
