function debouncing(mainFunction, delay) {
    let timer;
    return function (...args) {
        // Clear the previous timer to prevent the execution of 'mainFunction'
        clearTimeout(timer);
    
        // Set a new timer that will execute 'mainFunction' after the specified delay
        timer = setTimeout(() => {
          mainFunction(...args);
        }, delay);
      };
}