/* exported drop */
// Pseudocode
// The function takes in two parameters: array, and count
// The function returns a new array containing array elements after
//   the first count elements.
// The function first declares an empty array literal named dropArr.
// The function then checks the length of the parameter array to see if is
//   empty. If it is empty, the function returns dropArr.
// The function then iterates through the array, beginning at the index provided
//   by count to the remainder of the array.
// Each index value is pushed into dropArr.
// Finally, the function returns dropArr.

function drop(array, count) {
  var dropArr = [];
  if (array.length === 0) {
    return dropArr;
  }
  for (let i = count; i < array.length; i++) {
    dropArr.push(array[i]);
  }
  return dropArr;
}
