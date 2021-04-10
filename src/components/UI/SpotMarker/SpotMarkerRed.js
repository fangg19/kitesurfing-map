import React from 'react';
import classes from './SpotMarker.module.css';
import { Icon } from '@iconify/react';
import spotIcon from '@iconify-icons/mdi/map-marker';

const SpotMarkerRed = ({ onClick }) => {
  return (
    <div className={classes.SpotMarker} onClick={onClick}>
      <Icon icon={spotIcon} className={classes.spotIconRed} />
    </div>
  );
};

export default SpotMarkerRed;
