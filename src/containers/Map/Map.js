import React from 'react';
import classes from './Map.module.css';
import GoogleMapReact from 'google-map-react';
import SpotMarker from '../../components/UI/SpotMarker';

const Map = ({ data, center, zoom }) => {
  const spots = data.map((spot) => {
    return <SpotMarker lat={spot.lat} lng={spot.long} />;
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
