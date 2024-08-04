import React from 'react';
import TrafficLight from './custom-components/trafficLightComponent';
import useFibonacciCalculator from './custom-components/fibonacciCalculatorComponent';
import './styles/styles.css';

const App = () => {
  const calculator1 = useFibonacciCalculator(0);
  const calculator2 = useFibonacciCalculator(10);
  const calculator3 = useFibonacciCalculator(20);
  const calculator4 = useFibonacciCalculator(30);

  return (
    <div className="app">
      <h1>Fibonacci Traffic Lights</h1>
      <div className="traffic-light-container">
        <TrafficLight state={calculator1.state} number={calculator1.number} />
        <TrafficLight state={calculator2.state} number={calculator2.number} />
        <TrafficLight state={calculator3.state} number={calculator3.number} />
        <TrafficLight state={calculator4.state} number={calculator4.number} />
      </div>
    </div>
  );
};

export default App;
