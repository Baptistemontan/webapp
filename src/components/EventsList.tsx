import React, { useEffect, useRef, useState } from 'react';
import "../css/DriverEvents.css";
import "../css/DriverList.css";
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
            <td className="driverEvent-big">{event.congestionLevel}</td>
        </tr>
    )
}

export default function EventsList({eventSelectHandle, currentDriver}:{eventSelectHandle:Handler<DriverEvent|undefined>, currentDriver:Driver}) {
    const [selectedEvent, setSelectedEvent] = useState<number|undefined>(undefined)

    // top row of the table reference
    const topRowRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        setSelectedEvent(undefined);
        // scroll back to top when switching driver
        topRowRef.current?.scrollIntoView();
    },[currentDriver]);
    

    const selectEvent = (event:DriverEvent, num:number) => {
        setSelectedEvent(num);
        eventSelectHandle(event);
    }

    return(
        <table>
            <thead>
                <tr className="driverEvent-Title">
                    <th className="driverEvent-big"><div>Date :</div></th>
                    <th className="driverEvent-small"><div>Route ID :</div></th>
                    <th className="driverEvent-big"><div>Route name :</div></th>
                    <th className="driverEvent-small"><div>Speed :</div></th>
                    <th className="driverEvent-big"><div>Event type :</div></th>
                    <th className="driverEvent-small"><div>Foggy :</div></th>
                    <th className="driverEvent-small"><div>Rainy :</div></th>
                    <th className="driverEvent-small"><div>Windy :</div></th>
                    <th className="driverEvent-big"><div>Congestion level :</div></th>
                </tr>
            </thead>
            <tbody>
                { /* need this empty row to scroll back to the top */ }
                <tr ref={topRowRef}></tr>
                { /* same horrendous synthax error has in Map.tsx */ }
                <>
                {currentDriver.events.map((event, index) => (
                    <DriverEventDisplay key={event.routeName + index} selected={index === selectedEvent} event={event} clickHandle={() => { selectEvent(event, index)} }/>
                ))}
                </>
            </tbody>
            
        </table>
    )
}

