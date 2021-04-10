import React, { useState } from 'react';
import classes from './FilterBtn.module.css';
import filterIcon from '../../assets/filter.png';
import Filter from './Filter';

const FilterBtn = () => {
  const [clickToFilter, setClickToFilter] = useState(false);

  return (
    <div className={classes.FilterBtn}>
      <button
        className={classes.FilterButton}
        onClick={() => {
          setClickToFilter(!clickToFilter);
        }}
      >
        <img src={filterIcon} alt="filter-icon" />
        FILTERS
      </button>

      {clickToFilter ? <Filter /> : null}
    </div>
  );
};

export default FilterBtn;
