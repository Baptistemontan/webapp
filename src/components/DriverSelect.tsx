import React from 'react';
import "../css/DriverList.css";
import {Driver} from '../types'

export default function DriverSelect({driver}:{driver?:Driver}) {
    return(
        <div className="DriverSelect-wrapper">
            <p className="DriverSelect-name">
                {driver?.driverName || "No driver"}
            </p>
        </div>
    )
}

