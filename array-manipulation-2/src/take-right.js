/* exported takeRight */
// The function takeRight takes in two parameters: array and count
// The function returns a new array containing the last count elements of
//   the array. If count is larger than the array, then a copy of the array
//   is returned.
// The function creates an empty array literal named rightArr.
// The function then checks the length of the parameter array. If the length
//   is equal to 0, the function returns rightArr.
// If the array has content, the function then checks if count is greater than
// the length of the array. If this condition is met, the function iterates
// through the entire parameter array and pushes each index value into rightArr.
// If the array has content and count is smaller than the array length, the function
//   iterates through the array beginning at index given by subtracting count from
//   the length of the array. Each index value is pushed into rightArr.
// Finally, rightArr is returned by the function.

function takeRight(array, count) {
  var rightArr = [];

  if (array.length === 0) {
    return rightArr;
  } else if (count > array.length) {
    for (let i = 0; i < array.length; i++) {
      rightArr.push(array[i]);
    }
  } else {
    for (let i = array.length - count; i < array.length; i++) {
      rightArr.push(array[i]);
    }
  }
  return rightArr;
}
