import React from 'react';
import classes from './Map.module.css';
import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
  return (
    <div className={classes.Map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAQKZVKTw65FKtxdi-cNFd8D4GjWxD0A8o' }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 44.428795,
    lng: 26.103689,
  },
  zoom: 4,
};

export default Map;
