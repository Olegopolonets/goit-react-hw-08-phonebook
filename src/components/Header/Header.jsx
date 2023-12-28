import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../store/auth/selectors.js';
import { logoutThunk } from 'store/auth/operation.js';
import { HeaderWrapper, NavBar } from './StyledHeader.jsx';
import { Avatar } from '@mui/material';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <h2>Better Call Saul</h2>

      {user && <h2>Welcome to the club {user}</h2>}
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>

        {!isLoggedIn && (
          <>
            <NavLink to="/register">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}

        {isLoggedIn && (
          <>
            | <button onClick={() => dispatch(logoutThunk())}>Exit</button>
          </>
        )}
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
