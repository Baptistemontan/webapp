import React, { useState } from 'react';
import "../css/DriverPage.css";
import { Driver, DriverEvent, Handler } from '../types'
import DriverEvents from "./DriverEvents"
import { timestampToDateStr } from "../functions"

// no typescript version of this package, but it does exactly what I need so im gonna use it anyway
const formatCoords = require('formatcoords')


function EventInfo({event}:{event:DriverEvent}) {
    return(
        <div>
            <p>Date : {timestampToDateStr(event.eventTime)}</p>
            <p>Route ID : {event.routeId}</p>
            <p>Route Name : {event.routeName}</p>
            <p>Speed : {event.speed}</p>
            <p>Event type : {event.eventType}</p>
            <p>Foggy : {event.foggy ? "True" : "False"}</p>
            <p>Rainy : {event.rainy ? "True" : "False"}</p>
            <p>Windy : {event.windy ? "True" : "False"}</p>
            <p>Congestion level : {event.congestionLevel}</p>
            <p>Event position : {formatCoords(event.pos.lat, event.pos.lng).format()}</p>
        </div>
    )
}

export default function DriverInfo({currentDriver, changePageHandler}:{currentDriver:Driver, changePageHandler:Handler<never>}) {
    const [currentEvent, setCurrentEvent] = useState<DriverEvent|undefined>(undefined)
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
            <DriverEvents currentDriver={currentDriver} eventSelectHandle={setCurrentEvent} />
            {currentEvent && <EventInfo event={currentEvent}/>}
        </div>
    )
}