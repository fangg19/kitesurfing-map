import React from 'react';
import classes from './Dashboard.module.css';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <Navbar />
    </div>
  );
};

export default Dashboard;
