import React from 'react';
import '../styles/styles.css';

const TrafficLight = ({ state, number }) => {
  return (
    <div className="traffic-light">
      <div className={`light red ${state === 'stopped' ? 'active' : ''}`}></div>
      <div className={`light yellow ${state === 'calculating' ? 'active' : ''}`}></div>
      <div className={`light green ${state === 'complete' ? 'active' : ''}`}>
        {state === 'complete' && <span className="number">{number}</span>}
      </div>
    </div>
  );
};

export default TrafficLight;