import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Driver } from '../types';

const defaultCenter = {
  // Paris coordonates
  lat: 48.856614,
  lng: 2.3522219
}

function MapContainer({google, width, height, driver}:{google:any, width:string, height:string, driver:Driver|undefined}) {
  return (
    <Map
      google={google}
      style={{width: width, height: height}}
      initialCenter={ defaultCenter }
      center= { driver === undefined ? defaultCenter : driver.position }
    />
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA8oTlzBmaUfnSjAOnGy9dDucr6dfthnHE'
})(MapContainer);
