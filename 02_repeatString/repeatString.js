const repeatString = function(string, num) {
  if (num < 0) {
    return 'ERROR';
  } else {
    let newString = string.repeat(num);
    return newString;
  }
}

function repeatString2(word, times) {
  if (times < 0) return 'ERROR';
  let string ="";
  for (i = 0; i < times; i++) {
    string += word;
  }
  return string; 
}

// Do not edit below this line
module.exports = repeatString;
