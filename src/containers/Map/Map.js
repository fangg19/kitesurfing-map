import React, { useContext, useState } from 'react';
import classes from './Map.module.css';
import GoogleMapReact from 'google-map-react';
import SpotMarker from '../../components/UI/SpotMarker/SpotMarker';
import SpotDetails from '../../components/UI/SpotDetails/SpotDetails';
import { DataContext } from '../../contexts/DataContext';

const Map = ({ center, zoom }) => {
  const { spots, favs, spotInfo, setSpotInfo, setIsOnFav } = useContext(
    DataContext
  );

  const closeSpotInfo = () => {
    setSpotInfo(null);
  };

  for (let spot of spots) {
    for (let fav of favs) {
      if (spot.id === fav.id) {
        console.log(`${spot.name} is on favourites. => ${spot.id} & ${fav.id}`);
      }
    }
  }

  const spotMarker = spots.map((spot) => {
    return (
      <SpotMarker
        key={spot.id}
        lat={spot.lat}
        lng={spot.long}
        onClick={() => {
          setSpotInfo({
            id: spot.id,
            name: spot.name,
            country: spot.country,
            latitude: spot.lat,
            longitude: spot.long,
            wind: spot.probability,
            month: spot.month,
            favourite: spot.favourite,
          });
        }}
      />
    );
  });
  //to fix: spot-urile nu isi pastreaza locatia la zoom-in/zoom-out

  return (
    <div className={classes.Map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAQKZVKTw65FKtxdi-cNFd8D4GjWxD0A8o' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {spotMarker}
      </GoogleMapReact>
      {spotInfo && <SpotDetails closeDetails={closeSpotInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 44.428795,
    lng: 26.103689,
  },
  zoom: 1,
};

export default Map;
