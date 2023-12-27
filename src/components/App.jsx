import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Section } from './Section/Section.jsx';
import Header from './Header/Header.jsx';

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
      </Routes>
    </div>
  );
};
