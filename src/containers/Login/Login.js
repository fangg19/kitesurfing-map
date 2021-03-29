import axios from 'axios';
import React, { useState } from 'react';
import classes from './Login.module.css';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('https://605ce5a96d85de00170db441.mockapi.io/spot', {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className={classes.Login}>
      <h1>Kite</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.FormControl}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className={classes.FormControl}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
