import React,{useState, useEffect} from 'react';
import './App.css';
import DriverList from './components/DriverList';
import DriverPage from './components/DriverPage';
import { Driver } from './types';

function App() {
	const [drivers, setDrivers]:[Driver[], any] = useState([]);
	const [selected, setSelected]:[number, (selected:number) => void] = useState(-1);
	const getDrivers = (path:string) => {
		fetch(path)
		.then(response => response.json())
		.then(myJson => setDrivers(myJson))
	}
	useEffect(()=>{
    	getDrivers("./drivers.json");
	},[selected])
	const selectedCallback = (id:number) => {
		setSelected(id);
	}
  return (
	  <div className="app-wrapper">
		  <div className="app-driverList">
			  <DriverList drivers={drivers} callback={selectedCallback}></DriverList>
		  </div>
		  <div className="app-driverPage">
			  <DriverPage driver={drivers[selected]}></DriverPage>
		  </div>
	  </div>
  );
}

export default App;
