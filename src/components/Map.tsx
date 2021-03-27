import React from 'react';
import { Driver, Handler2 } from '../types';
import {GoogleMap, withGoogleMap} from 'react-google-maps';
import DriverMarker from './DriverMarker';

const defaultCenter = {
    // // Paris coordonates
    // lat: 48.856614,
    // lng: 2.3522219
    lat:35.191766965947394,
    lng:-90.0439453125
}

const containerStyle = { 
    height: `60vh`
}

const mapStyle = { 
    height: `100%`
}

export const MapStyle = {
    containerElement: <div style={containerStyle} />,
    mapElement: <div style={mapStyle} />
}


function MapRender({recenter, currentDriver, drivers, clickHandler}:{recenter:boolean,currentDriver:Driver|undefined, drivers:Driver[]|undefined, clickHandler:Handler2<Driver|undefined, boolean>}) {
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
