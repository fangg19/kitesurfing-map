import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Dashboard.module.css';
import Navbar from '../../components/Navbar';
import Map from '../Map/Map';
import Table from '../Table/Table';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://605ce5a96d85de00170db441.mockapi.io/spot'
      );
      console.log(response.data);
      setData(response.data);
    }

    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className={classes.Dashboard}>
      <Navbar />
      {loading ? (
        <p className={classes.Loading}>
          Please wait while we're getting your map...
        </p>
      ) : (
        <Map data={data} />
      )}
      <Table data={data} />
    </div>
  );
};

export default Dashboard;
