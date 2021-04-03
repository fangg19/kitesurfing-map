import React, { useContext } from 'react';
import axios from 'axios';
import classes from './SpotDetails.module.css';
import { DataContext } from '../../../contexts/DataContext';

const SpotDetials = ({ closeDetails }) => {
  const { spotInfo, favs, setSpotInfo } = useContext(DataContext);

  console.log(spotInfo);

  let favId;
  favs.forEach((fav) => {
    if (fav.spot === Number(spotInfo.id)) {
      favId = fav.id;
    }
  });

  const addFavHandler = () => {
    axios.post('https://605ce5a96d85de00170db441.mockapi.io/favourites', {
      spot: Number(spotInfo.id),
    });
    setSpotInfo({ ...spotInfo, favourite: true });
  };

  const removeFavHandler = () => {
    axios.delete(
      `https://605ce5a96d85de00170db441.mockapi.io/favourites/${favId}`
    );
    setSpotInfo({ ...spotInfo, favourite: false });
  };

  return (
    <div className={classes.SpotDetails}>
      <span onClick={closeDetails} className={classes.CloseDetails}>
        x
      </span>
      <h2>{spotInfo.name}</h2>
      <p className={classes.Country}>{spotInfo.country}</p>
      <p className={classes.Title}>WIND PROBABILITY</p>
      <p>{spotInfo.wind}%</p>
      <p className={classes.Title}>LATITUDE</p>
      <p>{spotInfo.latitude}&#176; N</p>
      <p className={classes.Title}>LONGITUDE</p>
      <p>{spotInfo.longitude}&#176; W</p>
      <p className={classes.Title}>WHEN TO GO</p>
      <p>{spotInfo.month}</p>
      {spotInfo.favourite ? (
        <button className={classes.RemoveFav} onClick={removeFavHandler}>
          - REMOVE FROM FAVOURITES
        </button>
      ) : (
        <button className={classes.AddFav} onClick={addFavHandler}>
          + ADD TO FAVOURTIES
        </button>
      )}
      ;
    </div>
  );
};

export default SpotDetials;
