import React from 'react';
import "../css/DriverList.css";
import {Driver} from '../types'

export default function DriverSelect({driver, onClick}:{driver:Driver, onClick:() => void}) {
    return(
        <div className="DriverSelect-wrapper" onClick={onClick}>
            <p className="DriverSelect-name">
                {driver.name}
            </p>
            <div className={"DriverSelect-active-indicator " + (driver.active ? "DriverSelect-active" : "DriverSelect-inactive")}></div>
        </div>
    )
}

