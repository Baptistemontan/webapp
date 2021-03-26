import React from 'react';
import { Driver, Handler } from '../types';
import { Marker, InfoWindow} from 'react-google-maps';

export default function DriverMarker({driver, clickHandler}:{driver:Driver, clickHandler:Handler<Driver>}) {
    return (
        <Marker position={driver.position} onClick={() => clickHandler(driver)}>
            <InfoWindow>
                <p>{driver.driverName}</p>
            </InfoWindow>
          </Marker>
    )
}