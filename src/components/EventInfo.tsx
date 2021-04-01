import React from 'react';
import "../css/DriverPage.css";
import { timestampToDateStr } from "../functions"

// no typescript version of this package, but it does exactly what I need so im gonna use it anyway
const formatCoords = require('formatcoords')


export default function EventInfo({event}:{event:DriverEvent}) {
    return(
        <div>
            <p><b>Date :</b> {timestampToDateStr(event.eventTime)}</p>
            <p><b>Route ID :</b> {event.routeId}</p>
            <p><b>Route Name :</b> {event.routeName}</p>
            <p><b>Speed :</b> {event.speed} km/h</p>
            <p><b>Event type :</b> {event.eventType}</p>
            <p><b>Foggy :</b> {event.foggy ? "True" : "False"}</p>
            <p><b>Rainy :</b> {event.rainy ? "True" : "False"}</p>
            <p><b>Windy :</b> {event.windy ? "True" : "False"}</p>
            <p><b>Congestion level :</b> {event.congestionLevel}</p>
            <p><b>Event position :</b> {formatCoords(event.pos.lat, event.pos.lng).format()}</p>
        </div>
    )
}