import React from 'react';
import './App.css';
import DriverList from './components/DriverList'
import {Driver} from './types'

const drivers:Driver[] = [
  {name:"Rogé", active: true},
  {name:"TOM", active: false},
  {name:"Abdellahaaaaaaaaaa", active: false}
]

function App() {
  return (
    <DriverList drivers={drivers}></DriverList>
  );
}

export default App;
