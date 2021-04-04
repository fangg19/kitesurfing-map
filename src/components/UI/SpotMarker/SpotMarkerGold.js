import React, { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';
import classes from './SpotMarker.module.css';
import { Icon } from '@iconify/react';
import spotIcon from '@iconify-icons/mdi/map-marker';

const SpotMarkerGold = ({ onClick, cname }) => {
  const { spots } = useContext(DataContext);

  return (
    <div className={classes.SpotMarker}>
      <Icon
        icon={spotIcon}
        className={classes.spotIconGold}
        onClick={onClick}
      />
    </div>
  );
};

export default SpotMarkerGold;
