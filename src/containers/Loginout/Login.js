import axios from 'axios';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import classes from './Login.module.css';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

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
          setError(true);
        }
        console.log(user);
      });
  };

  return (
    <div className={classes.Login}>
      {error ? (
        <h3
          className={classes.Error}
          onClick={() => {
            setError(false);
          }}
        >
          Oops.. Invalid username/password.
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
