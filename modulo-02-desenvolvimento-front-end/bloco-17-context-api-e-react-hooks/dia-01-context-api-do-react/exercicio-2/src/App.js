import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import CarsProvider from './context/carsProvider';
import TrafficSignalProvider from './context/trafficSignalProvider';

function App() {
  return (
    <div className="container">
      <CarsProvider>
        <Cars />
      </CarsProvider>
      <TrafficSignalProvider>
        <TrafficSignal />
      </TrafficSignalProvider>
    </div>
  );
}

export default App;
