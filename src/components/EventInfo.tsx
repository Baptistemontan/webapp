import React from 'react';
import "../css/DriverPage.css";
import { DriverEvent } from '../types'
import { timestampToDateStr } from "../functions"

// no typescript version of this package, but it does exactly what I need so im gonna use it anyway
const formatCoords = require('formatcoords')


export default function EventInfo({event}:{event:DriverEvent}) {
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