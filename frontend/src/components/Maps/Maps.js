import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '255px',
  height: '255px',
};

const Maps = ({ apiKey, address }) => {
  const [center, setCenter] = useState({lat:0, lng:0});

useEffect(()=>{
  Geocode.setApiKey(apiKey)
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setCenter({lat,lng})
    },
    (error) => {
      console.error(error);
    }
  );
}, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });


  return (
    <>
      {isLoaded && (
        center.lat !== 0 &&
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker
            position={center}
            title="hello"
          />
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
