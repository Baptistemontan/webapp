import React from 'react';
import "../css/DriverList.css";
import {Driver, Handler} from '../types'

export default function DriverSelect({driver, clickHandler}:{driver?:Driver, clickHandler?:Handler<never>}) {
    return(
        <div className="DriverSelect-wrapper" onClick={clickHandler}>
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

