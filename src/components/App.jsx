import { Route, Routes } from 'react-router-dom';
import { ContactForm } from '../pages/Contacts/ContactForm/ContactForm.jsx';
import { ContactList } from '../pages/Contacts/ContactList/ContactList.jsx';
import { Filter } from '../pages/Contacts/Filter/Filter.jsx';
import { Section } from '../pages/Contacts/Section/Section.jsx';
import Header from './Header/Header.jsx';
import NotFound from 'pages/NotFound/NotFound.jsx';
import Register from 'pages/Register/Register.jsx';
import Login from 'pages/Login/Login.jsx';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route
          path="/contacts"
          element={
            <>
              <Section title={'Phonebook'}>
                <ContactForm />
              </Section>
              <Section title={'Contacts'}>
                <Filter />
                <ContactList />
              </Section>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
