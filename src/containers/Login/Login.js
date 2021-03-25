import React from 'react';
import classes from './Login.module.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className={classes.Login}>
      <p>
        Go to <NavLink to="/dashboard">Dashboard.</NavLink>
      </p>
    </div>
  );
};

export default Login;
