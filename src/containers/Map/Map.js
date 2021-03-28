import React, { useState } from 'react';
import classes from './Map.module.css';
import GoogleMapReact from 'google-map-react';
import SpotMarker from '../../components/UI/SpotMarker/SpotMarker';
import SpotDetails from '../../components/UI/SpotDetails/SpotDetails';

const Map = ({ data, center, zoom }) => {
  const [spotInfo, setSpotInfo] = useState(null);

  const spots = data.map((spot) => {
    return (
      <SpotMarker
        lat={spot.lat}
        lng={spot.long}
        onClick={() => {
          setSpotInfo({
            name: spot.name,
            country: spot.country,
            latitude: spot.lat,
            longitude: spot.longitude,
            windProbability: spot.probability,
            month: spot.month,
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
        {spots}
      </GoogleMapReact>
      {spotInfo && <SpotDetails details={spotInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 44.428795,
    lng: 26.103689,
  },
  zoom: 6,
};

export default Map;
