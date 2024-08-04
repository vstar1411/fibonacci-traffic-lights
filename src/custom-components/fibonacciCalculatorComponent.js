import { useState, useEffect,useCallback } from 'react';

// non optimized version of fibonacci using recursive function
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

  
const useFibonacciCalculator = (initialValue) => {
  const [state, setState] = useState('stopped');
  const [number, setNumber] = useState(0);
  const [currentInput, setCurrentInput] = useState(initialValue);
  const [calculationCount, setCalculationCount] = useState(0);

  // optimized version of fibonacci using memory map
  const fibonacci = useCallback((n, memo = {}) => {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }, []);

  useEffect(() => {
    let timeoutId;

    if (state === 'stopped' && calculationCount < 10) {
      setState('calculating');
    } 
    if (state === 'calculating') {
      timeoutId = setTimeout(() => {
        const result = fibonacci(currentInput);
        setNumber(result);
        setCalculationCount(prev => prev + 1);
        setCurrentInput(prev => prev + 1);
        setState('complete');
      }, 1000);
    } 
    if (state === 'complete') {
      timeoutId = setTimeout(() => {
        if (calculationCount < 10) {
          setState('stopped');
        } else {
          setState('stopped');
        }
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [state, currentInput, calculationCount, initialValue]);

  return { state, number };
};

export default useFibonacciCalculator;

