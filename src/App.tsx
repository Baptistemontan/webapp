import React,{useState, useEffect} from 'react';
import './App.css';
import DriverList from './components/DriverList';
import DriverPage from './components/DriverPage';
import { Driver } from './types';


function App() {
	// hooks creation
	const [drivers, setDrivers] = useState<Driver[]>([]);
	const [selected, setSelected] = useState<number>(-1);

	// json parsing
	const getDrivers = (path:string) => {
		fetch(path)
		.then(response => response.json())
		.then((myJson:Driver[]) => setDrivers(myJson))
	}

	// json fetching on reload
	useEffect(()=>{
    	getDrivers("./drivers.json");
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
