// Defining a function called reportWebVitals that takes onPerfEntry as an argument
const reportWebVitals = onPerfEntry => {
  // Checking if onPerfEntry is a function and if so, importing the web-vitals library
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Calling various web-vitals functions and passing onPerfEntry function as argument to measure app performance
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
