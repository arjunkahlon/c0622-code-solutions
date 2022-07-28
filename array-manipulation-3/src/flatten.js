/* exported flatten */
// Pseudocode
// Implement a check to ensure that the array is not empty. Return the array
//  if it is.
// Declare a new array
// Iterate through the parameter array and check whether each index is an array.
//  -If the index is an array, iterate through the array of that index and push
//    each value into the new array.
//  -If the index is not an array, simply push the index into the new array.
// Return the new array

function flatten(array) {
  if (array.length === 0) {
    return array;
  }

  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
