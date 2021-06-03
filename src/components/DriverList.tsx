import React from 'react';
import "../css/DriverList.css";

function DriverSelector({driver}:{driver?:Driver}) {
    return(
        <div className="DriverSelect-wrapper">
            <p className="DriverSelect-name">
                {driver?.driverName || "No driver"}
            </p>
        </div>
    )
}

export default function DriverList({currentDriver, drivers,clickHandler}:{currentDriver:Driver|undefined, drivers:Driver[], clickHandler:Handler2<Driver|undefined, boolean>}) {
    const list = drivers.map((driver, index) => (
        <li className = {"DriverList-Selector button " + (driver === currentDriver ? "selected" : "")} key={driver.driverName + index} onClick={() => clickHandler(driver, true)}>
            <DriverSelector driver={driver}/>
        </li>
    ));

    // No driver display
    const defaultDriver = (
        <li className="DriverList-Selector">
            <DriverSelector />
        </li>
    )
    
    return (
        <ul className="DriverList-Wrapper noselect">
            { list.length ? list : defaultDriver }
        </ul>
    )
}

