import React from 'react';
import "../css/DriverList.css";
import {Driver, Handler} from '../types'

export default function DriverSelect({driver, clickHandler}:{driver:Driver, clickHandler:Handler<never>}) {
    return(
        <div className="DriverSelect-wrapper" onClick={clickHandler}>
            <p className="DriverSelect-name">
                {driver.name}
            </p>
            <div className={"DriverSelect-active-indicator " + (driver.active ? "DriverSelect-active" : "DriverSelect-inactive")}></div>
        </div>
    )
}

