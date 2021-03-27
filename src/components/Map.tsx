import React from 'react';
import { Driver, DriverEvent, Handler2 } from '../types';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import DriverMarker from './DriverMarker';

const defaultCenter = {
    // // Paris coordonates
    // lat: 48.856614,
    // lng: 2.3522219
    lat:35.191766965947394,
    lng:-90.0439453125
}

const containerStyle = { 
    height: `50vh`
}

const mapStyle = { 
    height: `100%`
}

export const MapStyle = {
    containerElement: <div style={containerStyle} />,
    mapElement: <div style={mapStyle} />
}


function MapRender({recenter, currentDriver, drivers, clickHandler, event}:{recenter:boolean,currentDriver?:Driver, drivers?:Driver[], clickHandler:Handler2<Driver|undefined, boolean>, event?:DriverEvent}) {
    return(
        <GoogleMap
            defaultZoom={5}
            defaultCenter={defaultCenter}
            {...(recenter && currentDriver ? {center:currentDriver.events[0].pos} : {})}
        >
            {drivers?.map((driver, index) => (
                <DriverMarker key={driver.driverName + index} driver={driver} clickHandler={clickHandler} />
            ))}
        </GoogleMap>
    )
}

export default withGoogleMap(MapRender);
