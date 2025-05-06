const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0

  array.forEach(element => {
    sum += element;
  });

	return sum;
};

const multiply = function(array) {
  let product = 1;

  array.forEach(element => {
    product *= element;
  });

  return product;
};

const power = function(num, power) {
  return Math.pow(num, power);
	
};

const factorial = function(num) {
	let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
