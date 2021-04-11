import React, { useContext } from 'react';
import axios from 'axios';
import classes from './SpotDetails.module.css';
import { DataContext } from '../../contexts/DataContext';

const SpotDetials = ({ closeDetails }) => {
  const {
    spotInfo,
    favs,
    setFavInfo,
    setSpotInfo,
    setErrorMessage,
  } = useContext(DataContext);

  let favId;
  favs.forEach((fav) => {
    if (fav.spot === Number(spotInfo.id)) {
      favId = fav.id;
    }
  });

  const addFavHandler = (id) => {
    setSpotInfo({ ...spotInfo, favourite: true });
    setFavInfo(true);
    try {
      axios.put(`https://605ce5a96d85de00170db441.mockapi.io/spot/${id}`, {
        favourite: true,
      });
      axios.post('https://605ce5a96d85de00170db441.mockapi.io/favourites', {
        spot: Number(id),
      });
    } catch (error) {
      setErrorMessage(
        `We're having a ${error.response.status} '${error.response.data}' error. Please try again.`
      );
    }
  };

  const removeFavHandler = (id) => {
    setSpotInfo({ ...spotInfo, favourite: false });
    setFavInfo(false);
    axios
      .delete(`https://605ce5a96d85de00170db441.mockapi.io/favourites/${id}`)
      .catch((error) => {
        setErrorMessage(
          `We're having a ${error.response.status} '${error.response.data}' error. Please try again.`
        );
      });
    axios
      .put(`https://605ce5a96d85de00170db441.mockapi.io/spot/${spotInfo.id}`, {
        favourite: false,
      })
      .catch((error) => {
        setErrorMessage(
          `We're having a ${error.response.status} '${error.response.data}' error. Please try again.`
        );
      });
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
        <button
          className={classes.RemoveFav}
          onClick={() => {
            removeFavHandler(favId);
          }}
        >
          - REMOVE FROM FAVOURITES
        </button>
      ) : (
        <button
          className={classes.AddFav}
          onClick={() => {
            addFavHandler(spotInfo.id);
          }}
        >
          + ADD TO FAVOURTIES
        </button>
      )}
      ;
    </div>
  );
};

export default SpotDetials;
