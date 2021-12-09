import React, { Component } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: -25.274398,
    lng: 133.775136
  };
  
  function MyComponent(props) {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: ''
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { 
            
            props.data.map( (location, key) => {
              return <Marker key={key}
              position={{
                lat: parseInt(location.lat),
                lng: parseInt(location.lng)
              }}
            />})
          }
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(MyComponent)