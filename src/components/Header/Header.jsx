import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>LOGO</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contscts</NavLink>
        <NavLink to="/register">Sing Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
