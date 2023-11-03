// Importing React and ReactDOM client library
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing App component and styling
import App from './App';
import './index.css';

// Importing reportWebVitals function to measure app performance
import reportWebVitals from './reportWebVitals';

// Creating a root for the application using ReactDOM.createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside a StrictMode element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Calling reportWebVitals function to measure app performance
reportWebVitals();