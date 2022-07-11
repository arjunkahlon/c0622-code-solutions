/* exported initial */
// Pseducode
// The function intial() is passed in a parameter array and returns a new
//    array containing all elements except the last.
// The function will create an array literal named intialArr.
// The fucntion will then iterate through a for loop in which the index
//   is initialized to 0
// The function will push every value from index 0 through the array.length - 1
//    into the tailArr. The final index will be disregarded
// The fucntion will return initialArr.

function initial(array) {
  var initialArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    initialArr.push(array[i]);
  }
  return initialArr;
}
