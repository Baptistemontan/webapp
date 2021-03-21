import React from 'react';
import "../css/DriverList.css";
import DriverSelect from "./DriverSelect"
import {Driver} from '../types'

export default function DriverList({drivers}:{drivers:Driver[]}) {
    return(
        <div className="DriverList-Wrapper">
            {drivers.map(driver => (
                <div className="DriverList-Selector">
                    <DriverSelect driver={driver}></DriverSelect>
                </div>
            ))}
        </div>
        
    )
}

