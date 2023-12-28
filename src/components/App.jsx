import { Route, Routes } from 'react-router-dom';
import { ContactForm } from '../pages/Contacts/ContactForm/ContactForm.jsx';
import { ContactList } from '../pages/Contacts/ContactList/ContactList.jsx';
import { Filter } from '../pages/Contacts/Filter/Filter.jsx';
import { Section } from '../pages/Contacts/Section/Section.jsx';
import Header from './Header/Header.jsx';
import NotFound from 'pages/NotFound/NotFound.jsx';
import Register from 'pages/Register/Register.jsx';
import Login from 'pages/Login/Login.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'store/auth/operation.js';
import { useEffect } from 'react';
import Home from 'pages/Home/Home.jsx';
import { PrivateRoute } from 'routesConfig/PrivateRoute.jsx';
import { PublicRoute } from 'routesConfig/PublicRoute.jsx';
import { selectIsRefresh } from '../store/auth/selectors.js';
import Loader from './Loader/Loader.jsx';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={
            <>
              <PrivateRoute>
                <Section title={'Phonebook'}>
                  <ContactForm />
                </Section>
                <Section title={'Contacts'}>
                  <Filter />
                  <ContactList />
                </Section>
              </PrivateRoute>
            </>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
