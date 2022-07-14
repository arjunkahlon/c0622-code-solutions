/* exported dropRight */
// Pseudocode
// The function dropRight takes in two parameters: array and count
// The function returns a new array containing the elements of the array
//   before the last count elements.
// The function begins by creating an empty array literal named dropArr.
// The function then iterates through the array beginning at index 0 to
//   the index value given by subtracting count from the length of the array.
// Each index value of the parameter array is pushed into dropArr.
// Finally, the function returns dropArr

function dropRight(array, count) {
  var dropArr = [];
  for (let i = 0; i < array.length - count; i++) {
    dropArr.push(array[i]);
  }
  return dropArr;
}
