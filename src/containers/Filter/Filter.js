import React, { useState } from 'react';
import classes from './Filter.module.css';

const Filter = ({}) => {
  const [country, setCountry] = useState('');
  const [wind, setWind] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes.FormControl}>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <div className={classes.FormControl}>
          <label htmlFor="windProb">Wind Probability: </label>
          <input
            type="password"
            name="windProb"
            onChange={(e) => {
              setWind(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="APPLY FILTER" />
      </form>
    </div>
  );
};

export default Filter;
