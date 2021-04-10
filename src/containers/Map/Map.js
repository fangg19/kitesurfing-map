import React, { useContext } from 'react';
import classes from './Map.module.css';
import GoogleMapReact from 'google-map-react';
import SpotMarkerGold from '../../components/UI/SpotMarker/SpotMarkerGold';
import SpotMarkerRed from '../../components/UI/SpotMarker/SpotMarkerRed';
import SpotDetails from '../../components/UI/SpotDetails/SpotDetails';
import { DataContext } from '../../contexts/DataContext';

const Map = ({ center, zoom }) => {
  const {
    spots,
    filteredSpots,
    spotInfo,
    setSpotInfo,
    setFavInfo,
    wind,
    country,
  } = useContext(DataContext);

  const closeSpotInfo = () => {
    setSpotInfo(null);
  };

  spots.forEach((singleSpot) => {
    setFavInfo(singleSpot.favourite);
  });
  // let spotsToMap;
  // if (wind === '' && country === '') {
  //   spotsToMap = spots;
  // } else {
  //   spotsToMap = filteredSpots;
  // }

  // o singura componenta de spotMarker cu state bazat pe altceva in afara de proprietatea spot-ului ??

  const spotMarker = spots.map((spot) => {
    if (spot.favourite) {
      return (
        <SpotMarkerGold
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
    } else {
      return (
        <SpotMarkerRed
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
    }
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
