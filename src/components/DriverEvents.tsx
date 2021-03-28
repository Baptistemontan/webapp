import React, { useState } from 'react';
import "../css/DriverEvents.css";
import { DriverEvent, Handler } from '../types'

function DriverEventDisplay({event, clickHandle, selected}:{event:DriverEvent, clickHandle:Handler<never>, selected:boolean}) {
    const now = new Date(event.eventTime);
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    return(
        <tr onClick={clickHandle} className={"button " + (selected ? "selected" : "")}>
            <td className="driverEvent-big">{str}</td>
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

export default function DriverEvents({events, eventSelectHandle}:{events:DriverEvent[], eventSelectHandle:Handler<DriverEvent>}) {
    const [selectedEvent, setSelectedEvent] = useState<number|undefined>(undefined)
    const selectEvent = (event:DriverEvent, num:number) => {
        console.log(num);
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
                {events.map((event, index) => (
                    <DriverEventDisplay selected={index === selectedEvent} event={event} clickHandle={() => { selectEvent(event, index)} }/>
                ))}
            </tbody>
            
        </table>
    )
}

