import React,{useState, useEffect} from 'react';
import './css/App.css';
import DriverList from './components/DriverList';
import DriverPage from './components/DriverPage';
import { Driver } from './types';
import LoadJson from "./loadJson"

function App() {
	// hooks creation
	const [drivers, setDrivers] = useState<Driver[]|undefined>(undefined);
	const [currentDriver, setCurrentDriver] = useState<Driver|undefined>(undefined);
	const [recenter, setRecenter] = useState<boolean>(false);

	// json fetching on reload
	useEffect(()=>{
    	LoadJson("./drivers.json", setDrivers);
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
				<DriverList drivers={drivers} clickHandler={currentDriverHandler}/>
			</div>
			<div className="app-driverPage">
				<DriverPage recenter={recenter} currentDriver={currentDriver} drivers={drivers} changeDriverHandler={currentDriverHandler}/>
			</div>
		</div>
	);
}

export default App;
