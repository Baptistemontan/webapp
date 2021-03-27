import React from 'react';
import "../css/DriverPage.css";
import { DriverEvent } from '../types'

function DriverEventDisplay({event}:{event:DriverEvent}) {
    return(
        <div className="DriverEvent">
            <p>{event.routeName}</p>
        </div>
    )
}

export default function DriverEvents({events}:{events?:DriverEvent[]}) {
    return(
        <div className="driverEvent-wrapper">
            {events?.map(event => (
                <DriverEventDisplay event={event}/>
            ))}
        </div>
    )
}

