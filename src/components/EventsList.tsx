import React, { useEffect, useRef, useState } from 'react';
import "../css/DriverEvents.css";
import "../css/DriverList.css";
import { Driver, DriverEvent, Handler, CompFunc } from '../types'
import { timestampToDateStr, driverEventPosFilter, driverEventTimeComp, compWay, driverEventCongestionLvlComp, driverEventRouteIdComp, driverEventTypeComp, driverEventRouteNameComp, driverEventSpeedComp } from "../functions"

const classBig = "driverEvent-big";
const classSma = "driverEvent-small";

function DriverEventDisplay({event, clickHandle, selected}:{event:DriverEvent, clickHandle:Handler<never>, selected:boolean}) {
    return(
        <tr onClick={clickHandle} className={"button " + (selected ? "selected" : "")}>
            <td className={classBig}>{timestampToDateStr(event.eventTime)}  </td>
            <td className={classSma}>{event.routeId}                        </td>
            <td className={classBig}>{event.routeName}                      </td>
            <td className={classSma}>{event.speed}                          </td>
            <td className={classBig}>{event.eventType}                      </td>
            <td className={classSma}>{event.foggy ? "True" : "False"}       </td>
            <td className={classSma}>{event.rainy ? "True" : "False"}       </td>
            <td className={classSma}>{event.windy ? "True" : "False"}       </td>
            <td className="driverEvent-last">{event.congestionLevel}        </td>
        </tr>
    )
}

export default function EventsList({eventSelectHandle, currentDriver}:{eventSelectHandle:Handler<DriverEvent|undefined>, currentDriver:Driver}) {
    const [selectedEventIndex, setSelectedEventIndex] = useState<number|undefined>(undefined)
    const [reversedComp, setReversedComp] = useState<boolean>(false);
    const [currentComp, setCurrentComp] = useState<CompFunc<DriverEvent>>(()=> driverEventTimeComp);

    // top row of the table reference
    const topRowRef = useRef<HTMLTableRowElement>(null);

    // execute when switching driver
    useEffect(() => {
        // reset all states
        setSelectedEventIndex(undefined);
        setReversedComp(false);
        setCurrentComp(() => driverEventTimeComp);
        // scroll back to top when switching driver
        topRowRef.current?.scrollIntoView();
    },[currentDriver]);
    

    const selectEvent = (event:DriverEvent, num:number) => {
        setSelectedEventIndex(num);
        eventSelectHandle(event);
    }

    const SortBy = (foo:CompFunc<DriverEvent>) => {
        if(currentComp === foo) {
            setReversedComp(!reversedComp);
        } else {
            setReversedComp(false);
            setCurrentComp(() => foo);
        }
    }

    return(
        <table className="noselect">
            <thead>
                <tr className="driverEvent-Title">
                    <th className={classBig} onClick={() => SortBy(driverEventTimeComp)}><div>Date :                </div></th>
                    <th className={classSma} onClick={() => SortBy(driverEventRouteIdComp)}><div>Route ID :            </div></th>
                    <th className={classBig} onClick={() => SortBy(driverEventRouteNameComp)}><div>Route name :          </div></th>
                    <th className={classSma} onClick={() => SortBy(driverEventSpeedComp)}><div>Speed :               </div></th>
                    <th className={classBig} onClick={() => SortBy(driverEventTypeComp)}><div>Event type :          </div></th>
                    <th className={classSma}><div>Foggy :               </div></th>
                    <th className={classSma}><div>Rainy :               </div></th>
                    <th className={classSma}><div>Windy :               </div></th>
                    <th className={classBig} onClick={() => SortBy(driverEventCongestionLvlComp)}><div>Congestion level :    </div></th>
                </tr>
            </thead>
            <tbody>
                { /* need this empty row to scroll back to the top */ }
                <tr ref={topRowRef}></tr>
                { /* same horrendous synthax error has in Map.tsx */ }
                <>
                {currentDriver.events.filter(driverEventPosFilter).sort(compWay(currentComp, reversedComp)).map((event, index) => (
                    <DriverEventDisplay key={event.routeName + index} selected={index === selectedEventIndex} event={event} clickHandle={() => { selectEvent(event, index)} }/>
                ))}
                </>
            </tbody>
            
        </table>
    )
}

