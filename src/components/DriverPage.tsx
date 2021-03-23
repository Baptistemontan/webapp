import React from 'react';
import "../css/DriverPage.css";
import {Driver} from '../types'

export default function DriverPage({driver}:{driver:Driver|undefined}) {
    return(
        <div className="DriverPage-wrapper">
            <p>
                {driver === undefined ? "no driver selected" : driver.name}
            </p>
        </div>
    )
}