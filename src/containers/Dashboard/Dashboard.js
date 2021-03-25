import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Dashboard.module.css';
import Navbar from '../../components/Navbar';
import Map from '../Map/Map';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://605ce5a96d85de00170db441.mockapi.io/spot'
      );
      console.log(response.data);
      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className={classes.Dashboard}>
      <Navbar />
      <Map data={data} />
    </div>
  );
};

export default Dashboard;
