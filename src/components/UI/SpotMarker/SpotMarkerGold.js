import React, { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';
import classes from './SpotMarker.module.css';
import { Icon } from '@iconify/react';
import spotIcon from '@iconify-icons/mdi/map-marker';

const SpotMarkerGold = ({ onClick, fav }) => {
  const { favInfo } = useContext(DataContext);

  return (
    <div className={classes.SpotMarker}>
      {fav ? (
        <Icon
          icon={spotIcon}
          className={classes.spotIconRed}
          onClick={onClick}
        />
      ) : (
        <Icon
          icon={spotIcon}
          className={classes.spotIconGold}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default SpotMarkerGold;
