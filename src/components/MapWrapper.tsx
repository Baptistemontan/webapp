import React from 'react';
import { Driver } from '../types';
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps';

const defaultCenter = {
  // Paris coordonates
  lat: 48.856614,
  lng: 2.3522219
}

const containerStyle = { 
    height: `60vh`,
};

const mapStyle = { 
  height: `100%`
};

type input = {currentDriver:Driver|undefined, drivers:Driver[]|undefined}


function MapRender({currentDriver, drivers}:input) {
  return(
      <GoogleMap
          defaultZoom={8}
          center={ currentDriver?.position || defaultCenter }
      >
        {drivers?.map((driver, index) => (
          <Marker key={(driver.driverName + index)} position={driver.position}></Marker>
        ))}
      </GoogleMap>
  )
}

const Map = withGoogleMap(MapRender);

export default function MapWrapper(props:input) {
  return(
      <Map
          containerElement={ <div style={containerStyle} /> }
          mapElement={ <div style={mapStyle} /> }
          {...props}
      />
  )
}
