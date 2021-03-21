import React from 'react';
import "../css/DriverList.css";
// import * as types from '../types'
import {Driver} from '../types'

export default function DriverSelect({driver}:{driver:Driver}) {
    return(
        <div className="DriverSelect-wrapper">
            <p className="DriverSelect-name">
                {driver.name}
            </p>
            <div className={"DriverSelect-active-indicator " + (driver.active ? "DriverSelect-active" : "DriverSelect-inactive")}></div>
        </div>
    )
}

