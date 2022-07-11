/* exported last */
// Pseudocode
// The function last() is takes in a parameter array and returns the last
// element of the array.
// The last element of an array can be accessed by subtracting 1 from the
//   length of the array, and using that value as an index.
// Thus, the function access the value of the array at index determined by
//    1 subtracted from the length of the array.
// The function returns the value held at this index.

function last(array) {
  return array[array.length - 1];
}
