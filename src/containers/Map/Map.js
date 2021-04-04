import React, { useContext } from 'react';
import classes from './Map.module.css';
import GoogleMapReact from 'google-map-react';
import SpotMarkerGold from '../../components/UI/SpotMarker/SpotMarkerGold';
import SpotMarkerRed from '../../components/UI/SpotMarker/SpotMarkerRed';
import SpotDetails from '../../components/UI/SpotDetails/SpotDetails';
import { DataContext } from '../../contexts/DataContext';

const Map = ({ center, zoom }) => {
  const { spots, spotInfo, setSpotInfo } = useContext(DataContext);

  const closeSpotInfo = () => {
    setSpotInfo(null);
  };

  // for (let spot of spots) {
  //   for (let fav of favs) {
  //     if (spot.id === fav.id) {
  //       console.log(`${spot.name} is on favourites. => ${spot.id} & ${fav.id}`);
  //     }
  //   }
  // }

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
        onClick={() => {
          setSpotInfo(null);
        }}
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
