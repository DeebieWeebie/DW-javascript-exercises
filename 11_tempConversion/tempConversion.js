const convertToCelsius = function(tempF) {
  degreeCelsius = (tempF - 32) * 5/9;
  return Math.round(degreeCelsius * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  degreeFahrenheit = (tempC * 9/5) + 32;
  return Math.round(degreeFahrenheit * 10) / 10;
};

convertToCelsius();
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
