import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../store/auth/selectors.js';

import { NavBar } from './StyledHeader.jsx';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import UserMenu from 'components/UserMenu/UserMenu.jsx';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    // <HeaderWrapper>
    //   <h2>Better Call Saul</h2>

    //   {user && <h2>Welcome to the club {user}</h2>}
    //   <NavBar>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/contacts">Contacts</NavLink>

    //     {!isLoggedIn && (
    //       <>
    //         <NavLink to="/register">Sign Up</NavLink>
    //         <NavLink to="/login">Login</NavLink>
    //       </>
    //     )}

    //     {isLoggedIn && (
    //       <>
    //         | <button onClick={() => dispatch(logoutThunk())}>Exit</button>
    //       </>
    //     )}
    //   </NavBar>
    // </HeaderWrapper>

    <Box>
      <AppBar position="static" style={{ justifyContent: 'space-between' }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ flexGrow: 1 }}
          >
            <Link to="/">Better Call Saul</Link>
          </Typography>

          <NavBar style={{ alignItems: 'center' }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>

            {!isLoggedIn && (
              <>
                <NavLink to="/register">Sign Up</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )}

            {isLoggedIn && <UserMenu />}
          </NavBar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
