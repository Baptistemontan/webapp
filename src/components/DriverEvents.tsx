import React, { useState } from 'react';
import "../css/DriverEvents.css";
import { Driver, DriverEvent, Handler } from '../types'
import { timestampToDateStr } from "../functions"

function DriverEventDisplay({event, clickHandle, selected}:{event:DriverEvent, clickHandle:Handler<never>, selected:boolean}) {
    return(
        <tr onClick={clickHandle} className={"button " + (selected ? "selected" : "")}>
            <td className="driverEvent-big">{timestampToDateStr(event.eventTime)}</td>
            <td className="driverEvent-small">{event.routeId}</td>
            <td className="driverEvent-big">{event.routeName}</td>
            <td className="driverEvent-small">{event.speed}</td>
            <td className="driverEvent-big">{event.eventType}</td>
            <td className="driverEvent-small">{event.foggy ? "True" : "False"}</td>
            <td className="driverEvent-small">{event.rainy ? "True" : "False"}</td>
            <td className="driverEvent-small">{event.windy ? "True" : "False"}</td>
            <td className="driverEvent-last">{event.congestionLevel}</td>
        </tr>
    )
}

export default function DriverEvents({eventSelectHandle, currentDriver}:{eventSelectHandle:Handler<DriverEvent>, currentDriver:Driver}) {
    const [selectedEvent, setSelectedEvent] = useState<number|undefined>(undefined)
    const [driver, setDriver] = useState<Driver>(currentDriver);
    if(currentDriver.driverId !== driver.driverId) {
        setDriver(currentDriver);
        setSelectedEvent(undefined);
    }
    const selectEvent = (event:DriverEvent, num:number) => {
        setSelectedEvent(num);
        eventSelectHandle(event);
    }
    return(
        <table>
            <thead>
                <tr>
                    <th className="driverEvent-big">Date :</th>
                    <th className="driverEvent-small">Route ID :</th>
                    <th className="driverEvent-big">Route name :</th>
                    <th className="driverEvent-small">Speed :</th>
                    <th className="driverEvent-big">Event type :</th>
                    <th className="driverEvent-small">Foggy :</th>
                    <th className="driverEvent-small">Rainy :</th>
                    <th className="driverEvent-small">Windy :</th>
                    <th className="driverEvent-big">Congestion level :</th>
                </tr>
            </thead>
            <tbody>
                {currentDriver.events.map((event, index) => (
                    <DriverEventDisplay selected={index === selectedEvent} event={event} clickHandle={() => { selectEvent(event, index)} }/>
                ))}
            </tbody>
            
        </table>
    )
}

