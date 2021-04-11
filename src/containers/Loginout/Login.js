import axios from 'axios';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import classes from './Login.module.css';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const { setUser, errorMessage, setErrorMessage } = useContext(UserContext);

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
        setErrorMessage(`We're having some trouble. Please refresh the page.`);
      });
  };

  return (
    <div className={classes.Login}>
      {errorMessage ? <h3 className={classes.Error}>{errorMessage}</h3> : null}
      {invalidCredentials ? (
        <h3 className={classes.Error}>Oops.. Invalid username/password.</h3>
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
