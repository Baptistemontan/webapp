import React,{useState, useEffect} from 'react';
import './css/App.css';
import DriverList from './components/DriverList';
import DriverPage from './components/DriverPage';
import { Driver } from './types';
import LoadJson from "./loadJson"

function App() {
	// hooks creation
	const [drivers, setDrivers] = useState<Driver[]>([]);
	const [selected, setSelected] = useState<number>(-1);

	// json fetching on reload
	useEffect(()=>{
    	LoadJson("./drivers.json", setDrivers);
	},[])

	// click handler
	const selectedClickHandler = (id:number) => {
		setSelected(id);
	}

	// rendering
	return (
		<div className="app-wrapper">
			<div className="app-driverList">
				<DriverList drivers={drivers} clickHandler={selectedClickHandler}></DriverList>
			</div>
			<div className="app-driverPage">
				<DriverPage driver={drivers[selected]}></DriverPage>
			</div>
		</div>
	);
}

export default App;
