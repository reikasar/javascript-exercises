// my solution
const convertToCelsius = function(toConvert) {
  let conversion = (toConvert - 32) * 5 / 9;
  let rounded = conversion.toFixed(1);
  let roundedToNumber = Number(rounded);
  return roundedToNumber;
};

const convertToFahrenheit = function(toConvert) {
  let conversion = (toConvert * 9 / 5 + 32);
  let rounded = conversion.toFixed(1);
  let roundedToNumber = Number(rounded);
  return roundedToNumber;
};

// solution
const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
