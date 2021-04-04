import React, { useContext, useState } from 'react';
import classes from './Navbar.module.css';
import UserIcon from '../assets/profile-user.png';
import { UserContext } from '../contexts/UserContext';

const Navbar = ({ history }) => {
  const [clickToLogout, setClickToLogout] = useState(false);
  const { setUser } = useContext(UserContext);

  const logoutHandler = () => {
    history.goBack();
  };

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
      {clickToLogout ? (
        <div className={classes.Logout}>
          <button className={classes.LogoutBtn} onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
