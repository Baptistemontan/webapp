import React from 'react';
import { Driver, Handler2 } from '../types';
import {GoogleMap, withGoogleMap} from 'react-google-maps';
import DriverMarker from './DriverMarker';

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

type input = {recenter:boolean,currentDriver:Driver|undefined, drivers:Driver[]|undefined, clickHandler:Handler2<Driver|undefined, boolean>}


function MapRender({recenter, currentDriver, drivers, clickHandler}:input) {
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={defaultCenter}
            {...(recenter && currentDriver ? {center:currentDriver.events[0].pos} : {})}
        >
            {drivers?.map((driver, index) => (
                <DriverMarker key={driver.driverName + index} driver={driver} clickHandler={clickHandler} />
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
