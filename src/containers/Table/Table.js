import React from 'react';
import classes from './Table.module.css';

const Table = ({ data }) => {
  const tableInfo = data.map((spot) => {
    return (
      <tr>
        <td>{spot.name}</td>
        <td>{spot.country}</td>
        <td>{spot.lat}&#176; N</td>
        <td>{spot.long}&#176; W</td>
        <td>{spot.probability}%</td>
        <td>{spot.month}</td>
      </tr>
    );
  });

  return (
    <table className={classes.Table}>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Wind prob.</th>
        <th>When to go</th>
      </tr>
      {tableInfo}
    </table>
  );
};

export default Table;
