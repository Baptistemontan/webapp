import React from 'react';
import "../css/DriverPage.css";
import { Driver, Handler } from '../types'

export default function DriverInfo({currentDriver, changePageHandler}:{currentDriver:Driver, changePageHandler:Handler<never>}) {
    return(
        <div className="DriverPage-wrapper">
            <div className="DriverPage-info-wrapper">
                <div className="DriverPage-info">
                    <p>Driver Name : {currentDriver.driverName} 
                    <br/>Truck ID : {currentDriver.truckId}</p>
                </div>
                <div className="DriverPage-switch-button button" onClick={changePageHandler}>
                    <p>
                        Driver Map Page
                    </p>
                </div>
            </div>
        </div>
    )
}