import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Dashboard.module.css';
import Navbar from '../../components/Navbar';
import Map from '../Map/Map';

const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <Navbar />
      <Map />
    </div>
  );
};

export default Dashboard;
