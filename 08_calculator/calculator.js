const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	let total = 0
  for (let i in array){
    total = total + array[i]
  }
  return total
};

const multiply = function(array) {
  let total = 1
  for (let i in array){
    total = total * array[i]
  }
  return total
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let result = 1
  let i = a
  while (i >= 1){
    result = result*i;
    i--;
  }
  return result
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
