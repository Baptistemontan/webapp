import React from 'react';
import "../css/DriverPage.css";
import {Driver, Handler2} from '../types'
import MapWrapper from './MapWrapper'

export default function DriverPage({recenter,currentDriver, drivers, changeDriverHandler}:{recenter:boolean, currentDriver:Driver | undefined, drivers:Driver[]|undefined, changeDriverHandler:Handler2<Driver|undefined, boolean>}) {
    return(
        <div className="DriverPage-wrapper">
            <div className="DriverPage-info-wrapper">
                <div className="DriverPage-info">
                    <p>Driver Name : {currentDriver === undefined ? "No driver selected." : currentDriver.driverName} 
                    <br/>Truck ID : {currentDriver?.truckId}</p>
                </div>
                <div className="DriverPage-switch-button">
                    <p>
                        Driver Info Page
                    </p>
                </div>
            </div>
            <div className="driverMap-wrapper">
                <MapWrapper recenter={recenter} currentDriver={currentDriver} drivers={drivers} clickHandler={changeDriverHandler}/>
            </div>
        </div>
    )
}