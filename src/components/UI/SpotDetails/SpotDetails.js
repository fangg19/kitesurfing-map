import React, { useState } from 'react';
import axios from 'axios';
import classes from './SpotDetails.module.css';

const SpotDetials = ({ details, closeDetails }) => {
  const addToFavHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://605ce5a96d85de00170db441.mockapi.io/favourites ',
        details.id
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className={classes.SpotDetails}>
      <span onClick={closeDetails} className={classes.CloseDetails}>
        x
      </span>
      <h2>{details.name}</h2>
      <p className={classes.Country}>{details.country}</p>
      <p className={classes.Title}>WIND PROBABILITY</p>
      <p>{details.wind}%</p>
      <p className={classes.Title}>LATITUDE</p>
      <p>{details.latitude}&#176; N</p>
      <p className={classes.Title}>LONGITUDE</p>
      <p>{details.longitude}&#176; W</p>
      <p className={classes.Title}>WHEN TO GO</p>
      <p>{details.month}</p>

      <button className={classes.AddToFav} onClick={addToFavHandler}>
        + ADD TO FAVOURTIES
      </button>
    </div>
  );
};

export default SpotDetials;
