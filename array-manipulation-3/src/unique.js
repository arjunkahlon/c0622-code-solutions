/* exported unique */
// Pseudocode
// Ensure that the array is not empty. If it is, return the empty array.
// Declare an empty array to hold unique values.
// Iterate through the parameter array and check if the unique value array contains
//  the indexed value of the parameter array. If it does not, push the indexed value
//  into the unique array.
// Return the unique array.

function unique(array) {
  if (array.length === 0) {
    return array;
  }
  var uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!(uniqueArr.includes(array[i]))) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}
