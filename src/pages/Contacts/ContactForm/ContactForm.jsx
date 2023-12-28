import { useDispatch, useSelector } from 'react-redux';
import { addContasctThunk } from '../../../store/contacts/operations.js';
import { getContacts } from '../../../store/contacts/selector.js';
import {
  BtnAddContact,
  FormWrapper,
  InputAddContact,
} from './StyledContactForm';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const createContact = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContasctThunk({ name, phone }));
    event.target.reset();
  };

  return (
    <FormWrapper autoComplete="off" onSubmit={createContact}>
      <TextField
        type="text"
        name="name"
        label="Contact name"
        variant="standard"
        color="warning"
        required
      />

      <TextField
        type="tel"
        name="phone"
        label="Phone number"
        variant="standard"
        color="warning"
        required
      />

      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Add contact
      </Button>
    </FormWrapper>
  );
};
