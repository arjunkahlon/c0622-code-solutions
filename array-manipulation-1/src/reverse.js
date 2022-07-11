/* exported reverse */
// Pseducode
// The function reverse() is passed in a parameter array and returns a new
//    array the elements in the parameter array in reverse order.
// The function will create an array literal named reverseArr.
// The fucntion will then iterate through the parameter array and use the
//   unshift() method to insert each parameter array index into reverseArr.

// The fucntion will return reverseArr.

function reverse(array) {
  var reverseArr = [];

  for (let i = 0; i < array.length; i++) {
    reverseArr.unshift(array[i]);
  }
  return reverseArr;
}
