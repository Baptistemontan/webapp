import React from 'react';
import "../css/DriverList.css";
import DriverSelect from "./DriverSelect"
import {Driver} from '../types'

export default function DriverList({drivers,clickHandler}:{drivers:Driver[], clickHandler:(id:number) => void}) {
    return(
        <ul className="DriverList-Wrapper">
            {drivers.map((driver, index) => (
                <li className="DriverList-Selector" key={driver.name + index}>
                    <DriverSelect driver={driver} clickHandler={() => clickHandler(index)}></DriverSelect>
                </li>
            ))}
        </ul>
    )
}

