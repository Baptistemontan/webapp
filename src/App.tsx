import React,{useState, useEffect} from 'react';
import './css/App.css';
import DriverList from './components/DriverList';
import DriverPage from './components/DriverPage';
import { Driver } from './types';
import LoadJson from "./loadJson"

function App() {
	// hooks creation
	const [drivers, setDrivers] = useState<Driver[]>([]);
	const [currentDriver, setCurrentDriver] = useState<Driver|undefined>(undefined);

	// json fetching on reload
	useEffect(()=>{
    	LoadJson("./drivers.json", setDrivers);
	},[])

	// click handler
	const currentDriverHandler = (driver:Driver|undefined) => {
		setCurrentDriver(driver);
	}

	// rendering
	return (
		<div className="app-wrapper">
			<div className="app-driverList">
				<DriverList drivers={drivers} clickHandler={currentDriverHandler}/>
			</div>
			<div className="app-driverPage">
				<DriverPage currentDriver={currentDriver} drivers={drivers}/>
			</div>
		</div>
	);
}

export default App;
