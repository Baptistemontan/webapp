import React from 'react';
import { Marker } from 'react-google-maps';

const Pin = {url:"http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", origin:{x:-12,y:0}};

export default function DriverMarker({event}:{event?:DriverEvent}) {
    return (
        <Marker position={event?.pos} icon={Pin}/>
    )
}