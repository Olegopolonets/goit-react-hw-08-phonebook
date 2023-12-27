import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>LOGO</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contscts</NavLink>
      </div>
    </header>
  );
};

export default Header;
