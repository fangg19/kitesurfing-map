import React from 'react';
import classes from './Navbar.module.css';
import UserIcon from '../assets/profile-user.png';

const Navbar = () => {
  return (
    <header className={classes.Navbar}>
      <h2>Kite</h2>
      <img src={UserIcon} alt="user-profile" />
    </header>
  );
};

export default Navbar;
