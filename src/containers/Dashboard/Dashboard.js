import React, { useState, useEffect, useContext, Fragment } from 'react';
import axios from 'axios';
import { DataContext } from '../../contexts/DataContext';
import classes from './Dashboard.module.css';
import Navbar from '../../components/UI/Navbar/Navbar';
import Map from '../Map/Map';
import Table from '../Table/Table';
import FilterBtn from '../Filter/FilterBtn';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const {
    errorMessage,
    setErrorMessage,
    setSpots,
    setFavs,
    setFilteredSpots,
  } = useContext(DataContext);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://605ce5a96d85de00170db441.mockapi.io/spot')
        .then((response) => {
          setSpots(response.data);
        })
        .catch((error) => {
          setErrorMessage(
            `We're having a ${error.response.status} '${error.response.data}' error. Please try again.`
          );
        });

      await axios
        .get('https://605ce5a96d85de00170db441.mockapi.io/favourites')
        .then((response) => {
          setFavs(response.data);
        })
        .catch((error) => {
          setErrorMessage(
            `We're having a ${error.response.status} '${error.response.data}' error. Please try again.`
          );
        });
    }
    fetchData();
    setLoading(false);
  }, [setFavs, setSpots, setFilteredSpots, setErrorMessage]);

  //dont fetch all the data again on state update !!

  return (
    <div className={classes.Dashboard}>
      {loading ? (
        <p className={classes.Loading}>
          Please wait while we're loading your Map and Spots.
        </p>
      ) : (
        <Fragment>
          <Navbar />
          {errorMessage ? (
            <h2 className={classes.Error}>{errorMessage}</h2>
          ) : (
            <>
              <FilterBtn />
              <Map />
              <Table />
            </>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
