import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../store/auth/selectors.js';
import { logoutThunk } from 'store/auth/operation.js';
import { HeaderWrapper, NavBar } from './StyledHeader.jsx';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();

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
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/">Better Call Saul</Link>
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            component="h6"
            sx={{ flexGrow: 1 }}
          >
            {user && <h2>Welcome to the club, {user}!</h2>}
          </Typography>

          <NavBar sx={{ flexGrow: 1, alignItems: 'center' }}>
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
                <Button
                  onClick={() => dispatch(logoutThunk())}
                  variant="contained"
                  color="error"
                >
                  EXIT
                </Button>
              </>
            )}
          </NavBar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
