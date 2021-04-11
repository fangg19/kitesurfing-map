import React, { useContext } from 'react';
import axios from 'axios';
import classes from './SpotDetails.module.css';
import { DataContext } from '../../contexts/DataContext';
import FullStarIcon from '../../assets/star-on.png';
import EmptyStarIcon from '../../assets/star-off.png';

const SpotDetials = ({ closeDetails }) => {
  const {
    spotInfo,
    favs,
    setFavInfo,
    setSpotInfo,
    setErrorMessage,
    setSpots,
  } = useContext(DataContext);

  let favId;
  favs.forEach((fav) => {
    if (fav.spot === Number(spotInfo.id)) {
      favId = fav.id;
    }
  });

  async function addFavHandler(id) {
    setSpotInfo({ ...spotInfo, favourite: true });
    setFavInfo(true);
    try {
      await axios.put(
        `https://605ce5a96d85de00170db441.mockapi.io/spot/${id}`,
        {
          favourite: true,
        }
      );

      await axios.post(
        'https://605ce5a96d85de00170db441.mockapi.io/favourites',
        {
          spot: Number(id),
        }
      );

      await axios
        .get('https://605ce5a96d85de00170db441.mockapi.io/spot')
        .then((response) => {
          setSpots(response.data);
        });
    } catch (error) {
      setErrorMessage(
        `We're having a ${error.response.status} '${error.response.data}' error. Please try again.`
      );
    }
  }

  async function removeFavHandler(id) {
    setSpotInfo({ ...spotInfo, favourite: false });
    setFavInfo(false);
    try {
      await axios.delete(
        `https://605ce5a96d85de00170db441.mockapi.io/favourites/${id}`
      );

      await axios.put(
        `https://605ce5a96d85de00170db441.mockapi.io/spot/${spotInfo.id}`,
        {
          favourite: false,
        }
      );
      await axios
        .get('https://605ce5a96d85de00170db441.mockapi.io/spot')
        .then((response) => {
          setSpots(response.data);
        });
    } catch (error) {
      setErrorMessage(
        `We're having a ${error.response.status} '${error.response.data}' error. Please try again.`
      );
    }
  }

  return (
    <div className={classes.SpotDetails}>
      <span onClick={closeDetails} className={classes.CloseDetails}>
        x
      </span>
      <h2>
        {spotInfo.name}
        {spotInfo.favourite ? (
          <img src={FullStarIcon} alt="star icon" />
        ) : (
          <img src={EmptyStarIcon} alt="star icon" />
        )}
      </h2>
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
