import React, { useEffect, useState } from 'react';
import "../css/DriverPage.css";
import Map, {MapStyle} from './Map'
import EventsList from "./EventsList"
import EventInfo from "./EventInfo"
import { DRIVER_API_URL } from '../functions';


export default function DriverPage({currentDriver, drivers, recenter, currentDriverHandler}:{currentDriverHandler:Handler2<Driver, boolean>, currentDriver?:Driver, drivers:Driver[], recenter:boolean}) {
    const [eventInfoRender, setEventInfoRender] = useState<boolean>(false);
    const [currentEvent, setCurrentEvent] = useState<DriverEvent|undefined>(undefined)
    const [events, setEvents] = useState<DriverEvent[]|undefined>(undefined);

    // switch beetween event info page and event map page
    const changePageHandler = () => setEventInfoRender(!eventInfoRender)

    // trigger everytime the selected drive change
    useEffect(() => {
        setCurrentEvent(undefined);
        if(currentDriver) {
            fetch(DRIVER_API_URL + "/get/events/" + currentDriver.driverId)
            .then(res => res.json())
            .then(data => setEvents(data))
        }
    },[currentDriver]);

    return (
        <div className="DriverPage-wrapper">
            <div className="DriverPage-info-wrapper">
                <div className="DriverPage-info">
                    <p>Driver Name : {currentDriver === undefined ? "No driver selected." : currentDriver.driverName} 
                    <br/>Truck ID : {currentDriver?.truckId}</p>
                </div>
                { currentDriver &&  <div className="DriverPage-switch-button button noselect" onClick={changePageHandler}>
                    <p>
                        {eventInfoRender ? "Events Map Page" : "Events Info Page"}
                    </p>
                </div> }
            </div>

            <Map recenter={recenter} currentDriver={currentDriver} drivers={drivers} clickHandler={currentDriverHandler} event={currentEvent} {...(MapStyle(!eventInfoRender))}/>
            
            { events && <EventsList currentEvent={currentEvent} events={events} eventSelectHandle={setCurrentEvent} /> }
            
            { eventInfoRender && currentEvent &&  <EventInfo event={currentEvent} />}
        </div>
    )
}