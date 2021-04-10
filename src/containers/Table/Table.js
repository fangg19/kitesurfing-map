import React, { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext';
import classes from './Table.module.css';

const Table = () => {
  const [searchData, setSearchData] = useState('');
  // let noValue;
  const { spots, setSpots } = useContext(DataContext);

  // const sortHandler = (key) => {
  //   console.log(spots);
  //   setSpots(
  //     spots.sort((a, b) => {
  //       console.log(a[key] - b[key]);
  //       return a[key] - b[key];
  //     })
  //   );
  // };

  const tableInfo = spots
    .filter((spot) => {
      if (searchData === '') {
        return spot;
      } else if (
        // componenta individuala de search ??
        spot.name.toLowerCase().includes(searchData.toLowerCase()) ||
        spot.country.toLowerCase().includes(searchData.toLowerCase()) ||
        spot.probability.toString().includes(searchData.toLowerCase()) ||
        spot.month.toLowerCase().includes(searchData.toLowerCase())
      ) {
        // noValue = false;
        return spot;
      }
    })
    .map((spot) => {
      return (
        <tr key={spot.id}>
          <td>{spot.name}</td>
          <td>{spot.country}</td>
          <td>{spot.lat}&#176;N</td>
          <td>{spot.long}&#176;W</td>
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
          placeholder="Search.."
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </div>
      {/* {noValue ? (
        <p>Oops! No info found. Please try another location.</p>
      ) : null} */}
      <div className={classes.Table}>
        <table>
          <thead>
            <tr>
              <th>
                Name
                {/* <span
                className={classes.SortSymbol}
                onClick={() => {
                  sortHandler('name');
                }}
              >
                &#8645;
              </span> */}
              </th>
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
