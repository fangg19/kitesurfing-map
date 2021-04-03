import React, { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext';
import classes from './Table.module.css';

const Table = () => {
  const [searchData, setSearchData] = useState('');

  const { spots } = useContext(DataContext);
  const tableInfo = spots
    .filter((spot) => {
      if (searchData === '') {
        return spot;
      } else if (
        // componenta individuala de search ??
        spot.name.toLowerCase().includes(searchData.toLocaleLowerCase()) ||
        spot.country.toLowerCase().includes(searchData.toLocaleLowerCase()) ||
        spot.probability.toString().includes(searchData.toLocaleLowerCase()) ||
        spot.month.toLowerCase().includes(searchData.toLocaleLowerCase())
      ) {
        return spot;
      }
    })
    .map((spot) => {
      return (
        <tr key={spot.id}>
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
    <div className={classes.Container}>
      <div className={classes.FormControl}>
        <label htmlFor="search">Locations</label>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </div>
      <table className={classes.Table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Wind prob.</th>
            <th>When to go</th>
          </tr>
        </thead>
        <tbody>{tableInfo}</tbody>
      </table>
    </div>
  );
};

export default Table;
