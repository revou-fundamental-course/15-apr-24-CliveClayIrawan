// JavaScript


// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  const celsiusValue = 20;
  const fahrenheitValue = 68;
  
  const fahrenheit = celsiusToFahrenheit(celsiusValue);
  const celsius = fahrenheitToCelsius(fahrenheitValue);
  
  console.log(`${celsiusValue}°C is equal to ${fahrenheit.toFixed(2)}°F`);
  console.log(`${fahrenheitValue}°F is equal to ${celsius.toFixed(2)}°C`)
  