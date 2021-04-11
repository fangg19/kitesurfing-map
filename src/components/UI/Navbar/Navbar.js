import React, { useState } from 'react';
import classes from './Navbar.module.css';
import UserIcon from '../../../assets/profile-user.png';
import { withRouter } from 'react-router';
import Logout from '../../../containers/LogInOut/Logout';

const Navbar = () => {
  const [clickToLogout, setClickToLogout] = useState(false);

  return (
    <header className={classes.Navbar}>
      <h2>Kite</h2>
      <img
        src={UserIcon}
        alt="user-profile"
        onClick={() => {
          setClickToLogout(!clickToLogout);
        }}
      />
      {clickToLogout ? <Logout /> : null}
    </header>
  );
};

export default withRouter(Navbar);
