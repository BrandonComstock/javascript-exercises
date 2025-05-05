const convertToCelsius = function(num) {
  num -= 32;
  return (Math.round((num * 5/9) * 10) / 10);
};

const convertToFahrenheit = function(num) {
  num *= 9/5;
  return (Math.round((num + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
