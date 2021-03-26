import React from 'react';
import "../css/DriverPage.css";
import {Driver, Handler} from '../types'
import MapWrapper from './MapWrapper'

export default function DriverPage({currentDriver, drivers, changeDriverHandler}:{currentDriver:Driver | undefined, drivers:Driver[]|undefined, changeDriverHandler:Handler<Driver|undefined>}) {
    return(
        <div className="DriverPage-wrapper">
            <p>
                {currentDriver === undefined ? "No driver selected." : currentDriver.driverName}
            </p>
            <div className="driverMap-wrapper">
                <MapWrapper currentDriver={currentDriver} drivers={drivers} clickHandler={changeDriverHandler}/>
            </div>
        </div>
    )
}