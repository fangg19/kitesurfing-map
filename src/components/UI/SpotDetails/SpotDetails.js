import React from 'react';
import classes from './SpotDetails.module.css';

const SpotDetials = () => {
  return (
    <div className={classes.SpotDetails}>
      <h2>Fuerteventura</h2>
      <p>Spain</p>
      <p>WIND PROBABILITY</p>
      <p>LATITUDE</p>
      <p>12.2222</p>
      <p>LONGITUDE</p>
      <p>11.2213</p>
      <p>WHEN TO GO</p>
      <p>JUNE</p>
      <div className={classes.AddToFav}>
        <p>+ ADD TO FAVOURTIES</p>
      </div>
    </div>
  );
};

export default SpotDetials;
