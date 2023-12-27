import { useDispatch, useSelector } from 'react-redux';
import { addContasctThunk } from '../../../store/contacts/operations.js';
import { getContacts } from '../../../store/contacts/selector.js';
import { BtnAddContact, InputAddContact } from './StyledContactForm';

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
    <form autoComplete="off" onSubmit={createContact}>
      <InputAddContact type="text" name="name" placeholder="Contact name" />

      <InputAddContact
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
      />

      <BtnAddContact type="submit">Add contact</BtnAddContact>
    </form>
  );
};
