const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

const multiply = function(arr) {
  const sum = arr.reduce((totalVal, currentVal) => totalVal *= currentVal, 1);
  return sum;
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
      let result = 1;
      while (num > 1)  {
        result *= num;
        num--;
      } 
    return result
    }
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
