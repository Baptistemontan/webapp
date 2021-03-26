import React, { useState } from 'react';
import { Driver, Handler2 } from '../types';
import { Marker, InfoWindow} from 'react-google-maps';

export default function DriverMarker({driver, clickHandler}:{driver:Driver, clickHandler:Handler2<Driver, boolean>}) {
    const [markerVisibility, setMarkerVisibility] = useState<boolean>(false);
    const onClick = () => {
        setMarkerVisibility(!markerVisibility);
        clickHandler(driver, false);
    }
    return (
        <Marker position={driver.position} onClick={onClick}>
            { markerVisibility && 
                <InfoWindow onCloseClick={() => setMarkerVisibility(false)}>
                    <p>{driver.driverName}</p>
                </InfoWindow>
            }
          </Marker>
    )
}