# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Running the Application

1. Ensure you have Node.js and npm installed on your system.
2. Clone this repository.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the dependencies.
5. Run `npm start` to start the development server.
6. Open your browser and visit `http://localhost:3000` to view the application.

## Design Decisions

1. **Custom Hook**: A custom hook `useFibonacciCalculator` was created to manage the state and calculations for each traffic light. This allows for easy reuse and separation of concerns.

2. **Simulated Calculation Time**: To better visualize the process, a 1-second delay was added between each state change and calculation.

3. **Responsive Design**: The traffic lights are laid out using flexbox, allowing them to wrap to the next row on smaller screens.

4. **Concurrent Operation**: Each traffic light operates independently using its own instance of the `useFibonacciCalculator` hook, allowing for concurrent calculations.

5. **State Management**: The traffic light states (stopped, calculating, complete) are managed within the custom hook, simplifying the main component logic.

## Potential Optimizations

1. **Memoization**: Implement memoization for the Fibonacci function to avoid redundant calculations.
2. **Web Workers**: For more intensive calculations, consider using Web Workers to perform calculations off the main thread.