/* exported take */
// Pseudocode
// The function take() has two parameters: array and count
// The function returns an array containing the first count elements
//    of the array. An empty array parameter returns an empty array.
// The function first creates an empty array literal named takeArr
// The function checks if parameter is array is empty. If it is empty,
//   the function returns takeArr.
// The function then iterates through the array until it reaches the number
//   of indexes specified by count. Each index is pushed into takeArr.
// Finally, the function returns takeArr.

function take(array, count) {
  var takeArr = [];
  if (array.length === 0) {
    return takeArr;
  }
  for (let i = 0; i < count; i++) {
    takeArr.push(array[i]);
  }
  return takeArr;
}
