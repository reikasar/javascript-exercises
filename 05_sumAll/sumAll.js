
// option 1
const sumAll = function(arg1, arg2) {
  let total = 0;
  if (arg1 > arg2 && arg1 > 0 && arg2 > 0 && Number.isInteger(arg1) && Number.isInteger(arg2)) {
    for (let i = arg2; i <= arg1; i++) {
      total += i; 
    }
    return total;
  } 
     
    else if (arg1 < arg2 && arg1 > 0 && arg2 > 0 && Number.isInteger(arg1) && Number.isInteger(arg2)) {
      for (let i = arg1; i <= arg2; i++) {
        total += i; 
    } 
    return total;
  }
  
    else return 'ERROR'
} 

// option 2
const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};



// Do not edit below this line
module.exports = sumAll;
