import React from 'react';
import classes from './SpotMarker.module.css';
import { Icon } from '@iconify/react';
import spotIcon from '@iconify-icons/mdi/map-marker';

const SpotMarker = ({ lat, lng, onClick }) => {
  return (
    <div className={classes.SpotMarker} onClick={onClick}>
      <Icon icon={spotIcon} className={classes.spotIcon} />
    </div>
  );
};

export default SpotMarker;
