const convertToCelsius = function(num) {
  num -= 32
  return (Math.round((num * 5/9) * 10) / 10);
};

const convertToFahrenheit = function(num) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
