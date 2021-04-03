import React, { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';
import classes from './SpotMarker.module.css';
import { Icon } from '@iconify/react';
import spotIcon from '@iconify-icons/mdi/map-marker';

const SpotMarker = ({ onClick }) => {
  const { spotInfo } = useContext(DataContext);
  return (
    <div className={classes.SpotMarker} onClick={onClick}>
      <Icon icon={spotIcon} className={classes.spotIconGold} />
    </div>
  );
};

export default SpotMarker;
