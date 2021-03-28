import React from 'react';
import "../css/DriverList.css";
import DriverSelect from "./DriverSelector"
import { Driver, Handler2 } from '../types'

export default function DriverList({currentDriver, drivers,clickHandler}:{currentDriver?:Driver, drivers:Driver[], clickHandler:Handler2<Driver|undefined, boolean>}) {
    const list = drivers.map((driver, index) => (
        <li className = {"DriverList-Selector button " + (driver.driverId === currentDriver?.driverId ? "selected" : "")} key={driver.driverName + index} onClick={() => clickHandler(driver, true)}>
            <DriverSelect driver={driver}/>
        </li>
    ));

    // No driver display
    const defaultDriver = (
        <li className="DriverList-Selector">
            <DriverSelect/>
        </li>
    )
    
    return(
        <ul className="DriverList-Wrapper">
            { list.length ? list : defaultDriver }
        </ul>
    )
}

