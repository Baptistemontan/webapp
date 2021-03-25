import React from 'react';
import "../css/DriverPage.css";
import {Driver} from '../types'
import MapContainer from './MapContainer'

export default function DriverPage({driver}:{driver:Driver | undefined}) {
    return(
        <div className="DriverPage-wrapper">
            <p>
                {driver === undefined ? "No driver selected." : driver.driverName}
            </p>
            <div className="driverMap-wrapper">
                <MapContainer height="50%" width="80%" driver={driver}></MapContainer>
            </div>
        </div>
    )
}