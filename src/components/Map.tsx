import React from 'react';
import { Driver, DriverEvent, Handler2 } from '../types';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import DriverMarker from './DriverMarker';
import EventMarker from './EventMarker'

const defaultCenter = {
    // // Paris coordonates
    // lat: 48.856614,
    // lng: 2.3522219
    lat:35.191766965947394,
    lng:-90.0439453125
}

const containerStyle = (visible:boolean) => ({ 
    height: (visible ? `50vh` : "0")
})

const mapStyle = { 
    height: `100%`
}

export const MapStyle = (visible:boolean) => ({
    containerElement: <div style={containerStyle(visible)} />,
    mapElement: <div style={mapStyle} />
})


function MapRender({recenter, currentDriver, drivers, clickHandler, event}:{recenter:boolean,currentDriver?:Driver, drivers:Driver[], clickHandler:Handler2<Driver, boolean>, event?:DriverEvent}) {
    return(
        <GoogleMap
            defaultZoom={5}
            defaultCenter={defaultCenter}
            // disable "CTRL + scroll to zoom" message
            options={{ gestureHandling: "greedy" }}
            {...(recenter && currentDriver ? {center:currentDriver.events[0].pos} : {})}
        >
            {drivers.map((driver, index) => (
                // for ***** reason having 2 marker at the same position makes them unable to be deleted, so we make sure we don't put 2 marker atthe same place
                driver.events[0].pos !== event?.pos && <DriverMarker key={driver.driverName + index} driver={driver} clickHandler={clickHandler} />
            ))}
            <EventMarker event={event}/>
        </GoogleMap>
    )
}

export default withGoogleMap(MapRender);
