import React, { useState } from 'react';
import { Driver, Handler2 } from '../types';
import { Marker, InfoWindow } from 'react-google-maps';

// const Pin = {url:"http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", origin:{x:-10,y:0}};

export default function DriverMarker({driver, clickHandler}:{driver:Driver, clickHandler:Handler2<Driver, boolean>}) {
    const [infoWindowVisibility, setInfoWindowVisibility] = useState<boolean>(false);
    const onClick = () => {
        setInfoWindowVisibility(!infoWindowVisibility);
        clickHandler(driver, false);
    }
    return (
        <Marker 
            position={driver.events[0].pos}
            onClick={onClick}
        >
            { infoWindowVisibility && 
                <InfoWindow onCloseClick={() => setInfoWindowVisibility(false)}>
                    <p>{driver.driverName}</p>
                </InfoWindow>
            }
        </Marker>
    )
}