import React from 'react';
import classes from './SpotDetails.module.css';

const SpotDetials = ({ details, closeDetails }) => {
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

      <button className={classes.AddToFav}>+ ADD TO FAVOURTIES</button>
    </div>
  );
};

export default SpotDetials;
