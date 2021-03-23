import React,{useState, useEffect} from 'react';
import './App.css';
import DriverList from './components/DriverList';
import DriverPage from './components/DriverPage';
import { Driver } from './types';


function App() {
	const [drivers, setDrivers]:[Driver[], (drivers:Driver[]) => void] = useState<Driver[]>([]);
	const [selected, setSelected]:[number, (id:number) => void] = useState<number>(-1);
	const getDrivers = (path:string) => {
		fetch(path)
		.then(response => response.json())
		.then(myJson => setDrivers(myJson))
	}
	useEffect(()=>{
    	getDrivers("./drivers.json");
	},[selected])
	const selectedClickHandler = (id:number) => {
		setSelected(id);
	}
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
