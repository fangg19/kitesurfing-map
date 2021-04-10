import axios from 'axios';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import classes from './Login.module.css';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [serverError, setServerError] = useState(false);
  const { setUser } = useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post('https://605ce5a96d85de00170db441.mockapi.io/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.username && response.data.password) {
          setUser(response.data);
          history.push('/dashboard');
        } else {
          setInvalidCredentials(true);
        }
      })
      .catch((error) => {
        setServerError(true);
      });
  };

  return (
    <div className={classes.Login}>
      {serverError ? (
        <h3
          className={classes.Error}
          onClick={() => {
            setServerError(false);
          }}
        >
          We have a server problem. Please try again.
        </h3>
      ) : null}
      {invalidCredentials ? (
        <h3
          className={classes.Error}
          onClick={() => {
            setInvalidCredentials(false);
          }}
        >
          Oops.. Invalid credentials.
        </h3>
      ) : null}
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
