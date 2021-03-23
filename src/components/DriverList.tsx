import React from 'react';
import "../css/DriverList.css";
import DriverSelect from "./DriverSelect"
import {Driver} from '../types'

export default function DriverList({drivers,callback}:{drivers:Driver[], callback:(id:number) => void}) {
    return(
        <ul className="DriverList-Wrapper">
            {drivers.map((driver, index) => (
                <li className="DriverList-Selector" key={driver.name}>
                    <DriverSelect driver={driver} onClick={() => callback(index)}></DriverSelect>
                </li>
            ))}
        </ul>
    )
}

