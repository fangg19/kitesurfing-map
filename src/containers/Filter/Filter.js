import React, { useContext } from 'react';
import axios from 'axios';
import classes from './Filter.module.css';
import { DataContext } from '../../contexts/DataContext';

const Filter = () => {
  const {
    spots,
    setSpots,
    setFilteredSpots,
    country,
    wind,
    setCountry,
    setWind,
  } = useContext(DataContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const filtered = spots.filter((spot) => {
      if (country === '' && wind === '') {
        return spot;
      } else if (
        spot.country.toLowerCase().includes(country.toLowerCase()) &&
        spot.probability.toString().includes(wind.toString())
      ) {
        return spot;
      }
    });
    setSpots(filtered);
  };

  const resetHandler = (e) => {
    console.log('RESET');
    axios
      .get('https://605ce5a96d85de00170db441.mockapi.io/spot')
      .then((response) => {
        setSpots(response.data);
      });
  };

  return (
    <div className={classes.Filter}>
      <form onSubmit={submitHandler} onReset={resetHandler}>
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
            type="text"
            name="windProb"
            onChange={(e) => {
              setWind(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="APPLY FILTER" />
        <input type="reset" value="RESET" />
      </form>
    </div>
  );
};

export default Filter;
