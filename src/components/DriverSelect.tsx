import React from 'react';
import "../css/DriverList.css";
import {Driver, Handler2} from '../types'

export default function DriverSelect({driver, clickHandler}:{driver?:Driver, clickHandler?:Handler2<Driver|undefined, boolean>}) {
    return(
        <div className="DriverSelect-wrapper" onClick={() => clickHandler?.(driver, true)}>
            <div className="DriverSelect-name-wrapper">
                <p className="DriverSelect-name">
                    {driver?.driverName || "No driver"}
                </p>
            </div>
            
            { driver ? 
                <div className="DriverSelect-indicator-wrapper">
                    <div className={"DriverSelect-active-indicator " + (driver.active ? "DriverSelect-active" : "DriverSelect-inactive")}></div> 
                </div>
            : undefined }
        </div>
    )
}

