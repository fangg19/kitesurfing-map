import React, { useContext } from 'react';
import classes from './Logout.module.css';
import { UserContext } from '../../contexts/UserContext';
import { withRouter } from 'react-router';
import { Icon } from '@iconify/react';
import logout from '@iconify-icons/mdi/logout-variant';

const Logout = ({ history }) => {
  const { setUser } = useContext(UserContext);

  const logoutHandler = () => {
    setUser(null);
    history.push('/');
  };
  return (
    <div className={classes.Logout} onClick={logoutHandler}>
      <Icon icon={logout} className={classes.LogoutIcon} />
      <button className={classes.LogoutBtn}>Logout</button>
    </div>
  );
};

export default withRouter(Logout);
