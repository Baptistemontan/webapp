import React, { useState } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

// const Pin = {url:"http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", origin:{x:-10,y:0}};

export default function DriverMarker({driver, clickHandler}:{driver:Driver, clickHandler:Handler2<Driver, boolean>}) {
    const [infoWindowVisibility, setInfoWindowVisibility] = useState<boolean>(false);
    // const [lastPos, setLastPos] = useState<Position | undefined>(undefined);
    
    const onClick = () => {
        setInfoWindowVisibility(!infoWindowVisibility);
        clickHandler(driver, false);
    }

    // useEffect(() => {
    //     fetch("http://localhost:3000/get/driverpos/" + driver.driverId)
    //     .then(res => res.json())
    //     .then(data => setLastPos(data))
    // }, [driver]);
    
    return (
        <Marker 
            position={driver.lastPos}
            onClick={onClick}
        >
            { infoWindowVisibility && 
                <InfoWindow onCloseClick={() => setInfoWindowVisibility(false)}>
                    <p>{driver.driverName}</p>
                </InfoWindow>
            }
        </Marker>
    )
}