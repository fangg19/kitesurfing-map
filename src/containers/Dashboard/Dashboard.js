import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../../contexts/DataContext';
import classes from './Dashboard.module.css';
import Navbar from '../../components/Navbar';
import Map from '../Map/Map';
import Table from '../Table/Table';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { spots, setSpots, favs, setFavs } = useContext(DataContext);

  useEffect(() => {
    async function fetchData() {
      const spotRes = await axios.get(
        'https://605ce5a96d85de00170db441.mockapi.io/spot'
      );
      console.log(spotRes.data);
      setSpots(spotRes.data);

      const favRes = await axios.get(
        'https://605ce5a96d85de00170db441.mockapi.io/favourites'
      );
      console.log(favRes.data);
      setFavs(favRes.data);
    }
    fetchData();
    setLoading(false);
  }, [setFavs, setSpots]);

  return (
    <div className={classes.Dashboard}>
      <Navbar />
      {loading ? (
        <p className={classes.Loading}>
          Please wait while we're getting your info...
        </p>
      ) : (
        <React.Fragment>
          <Map />
          <Table />
        </React.Fragment>
      )}
    </div>
  );
};

export default Dashboard;
