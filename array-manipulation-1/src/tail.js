/* exported tail */
// Pseducode
// The function tail() is passed in a parameter array and returns a new
//    array containing all elements after the first.
// The function will create an array literal named tailArr.
// The fucntion will then iterate through a for loop in which the index
//   is initialized to 1, as index 1 is the second element in the array.
// The function will push every value from index 1 through the remanining
//   indexes of the array into the tailArr.
// The fucntion will return tailArr.

function tail(array) {
  var tailArr = [];

  for (let i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }
  return tailArr;
}
