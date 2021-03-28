import React,{useState, useEffect} from 'react';
import './css/App.css';
import DriverList from './components/DriverList';
import { Driver, DriverEvent } from './types';
import { LoadJson } from "./functions"
import DriverMap from './components/DriverMap';
import DriverInfo from './components/DriverInfo';

function App() {
	// hooks creation
	const [drivers, setDrivers] = useState<Driver[]>([]);
	const [currentDriver, setCurrentDriver] = useState<Driver|undefined>(undefined);
	const [recenter, setRecenter] = useState<boolean>(false);
	const [infoPage, setInfoPage] = useState<boolean>(false);
	const [currentEvent, setCurrentEvent] = useState<DriverEvent|undefined>(undefined);

	const changePageHandler = () => {
		setCurrentEvent(undefined);
		setInfoPage(!infoPage);
	}

	// json fetching on reload
	useEffect(()=>{
    	LoadJson(window.location.href + "/drivers.json", setDrivers);
	},[])

	// click handler
	const currentDriverHandler = (driver:Driver|undefined, recenter:boolean) => {
		setRecenter(recenter);
		setCurrentEvent(undefined);
		setCurrentDriver(driver);
	}

	// rendering
	return (
		<div className="app-wrapper">
			<div className="app-driverList">
				<DriverList currentDriver={currentDriver} drivers={drivers} clickHandler={currentDriverHandler}/>
			</div>
			<div className="app-driverPage">
				{infoPage && currentDriver ? 
					<DriverInfo currentDriver={currentDriver} changePageHandler={changePageHandler}/> 
					: 
					<DriverMap currentEvent={currentEvent} changeEventHandler={setCurrentEvent} recenter={recenter} currentDriver={currentDriver} drivers={drivers} changeDriverHandler={currentDriverHandler} changePageHandler={changePageHandler}/>
				}
			</div>
		</div>
	);
}

export default App;
