/* exported chunk */
// Pseudocode
// I've coded this solution without the use of Array.prototype.slice to meet
//   the Optional Challenge.
// The function chunk() has two parameters: array and size.
// The function returns a new array of arrays. Each sub-array has a length equal
//   to size. Any remaining elements are gathered into a final sub-array.
// The function begins by creating an empty array literal named chunkArr.
// The fuction iterates through a for loop, in which the index is initialized
//   to 0, with the conditional expression that the index i is less than the length of
//   the array. The index i is incremented by the parameter size on each iteration.
// At the beginning of the for loop, the function creates an empty array
//   literal named subArr.
// The function enters another for loop in which it initializes loop index j to 0, with
//   the condition that j is less than parameter of size. There is an increment for j.
// The function then has a conditional statement that checks if the sum of index i and
//   index j is less than the length of the array.
//   - This ensures that the function only accesses indexes that exist in the parameter array.
// If the above condition evalues true, the function pushes the value held in the parameter
//   array at the index given by the sum of the two indexes: i and j
// Once the inner for loop exits, the function pushes subArr into chunkArr.
// Once the outer for loop exits, the function returns chunkArr.

function chunk(array, size) {
  var chunkArr = [];
  for (let i = 0; i < array.length; i += size) {
    var subArr = [];
    for (let j = 0; j < size; j++) {
      if ((i + j) < array.length) {
        subArr.push(array[i + j]);
      }
    }
    chunkArr.push(subArr);
  }
  return chunkArr;
}
