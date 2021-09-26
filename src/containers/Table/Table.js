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
        spot.name.toLowerCase().includes(searchData.toLowerCase()) ||
        spot.country.toLowerCase().includes(searchData.toLowerCase()) ||
        spot.probability.toString().includes(searchData.toLowerCase()) ||
        spot.month.toLowerCase().includes(searchData.toLowerCase())
      ) {
        return spot;
      }
    })
    .map((spot) => {
      return (
        <tr key={spot.id}>
          <td>{spot.name}</td>
          <td>{spot.country}</td>
          <td>{Number(spot.lat).toFixed(2)}&#176; N</td>
          <td>{Number(spot.long).toFixed(2)}&#176; W</td>
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
          placeholder="Search for any criteria.."
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </div>
      <div className={classes.Table}>
        <table>
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
    </div>
  );
};

export default Table;
