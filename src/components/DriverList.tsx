import React from 'react';
import "../css/DriverList.css";
import DriverSelect from "./DriverSelect"
import {Driver, Handler} from '../types'

export default function DriverList({drivers,clickHandler}:{drivers:Driver[]|undefined, clickHandler:Handler<Driver|undefined>}) {
    const list = drivers?.map((driver, index) => (
        <li className="DriverList-Selector" key={driver.driverName + index}>
            <DriverSelect driver={driver} clickHandler={() => clickHandler(driver)}/>
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
            { list && list.length ? list : defaultDriver }
        </ul>
    )
}

