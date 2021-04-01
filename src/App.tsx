import React, {useState, useEffect} from 'react';
import './css/App.css';
import DriverList from './components/DriverList';
import { LoadJson } from "./functions"
import DriverPage from './components/DriverPage'

function App() {
	// hooks creation
	const [drivers, setDrivers] = useState<Driver[]>([]);
	const [currentDriver, setCurrentDriver] = useState<Driver|undefined>(undefined);
	const [recenter, setRecenter] = useState<boolean>(false);

	// json fetching on reload
	useEffect(()=>{
    	LoadJson(window.location.href + "/drivers.json", setDrivers);
	},[])

	// click handler
	const currentDriverHandler = (driver:Driver|undefined, recenter:boolean) => {
		setRecenter(recenter);
		setCurrentDriver(driver);
	}

	// rendering
	return (
		<div className="app-wrapper">
			<div className="app-driverList">
				<DriverList currentDriver={currentDriver} drivers={drivers} clickHandler={currentDriverHandler}/>
			</div>
			<div className="app-driverPage">
				<DriverPage currentDriver={currentDriver} drivers={drivers} currentDriverHandler={currentDriverHandler} recenter={recenter} />
			</div>
		</div>
	);
}

export default App;
