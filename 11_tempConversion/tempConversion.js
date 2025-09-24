const convertToCelsius = function(tempF) {
  degreeCelsius = (tempF - 32) * 5/9
  return Math.round(degreeCelsius * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  return (tempC * 9/5) + 32
};

convertToCelsius(32);
convertToFahrenheit();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
