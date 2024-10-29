/* const reverseString = function(word) {
  let newArray = word.split('');
  let newArrayReversed = newArray.reverse();
  let newString = newArrayReversed.toString();
  let newStringNoCommas = newString.replaceAll(',', '')
  return newStringNoCommas;
}
 */

/* const reverseString = function (string) {
  return string.split("").reverse().join("");
}; */

const reverseString = function(word) {
  let newArray = word.split('');
  let newArrayReversed = newArray.reverse();
  let newString = newArrayReversed.join('')
  return newString;
}
// Do not edit below this line
module.exports = reverseString;
