const removeFromArray = function(array, ...toBeRemoved) {
  for (let i = array.length; i >= 0; i--) {
    if (toBeRemoved.includes(array[i])) { 
    array.splice(i, 1);
    }
  }
  return array;
}

//console.log(removeFromArray([1, 4, 6 ,'auto'], 6));

// Do not edit below this line
module.exports = removeFromArray;
