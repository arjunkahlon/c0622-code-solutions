// Function Definitions

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey,' + ' ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

// Function Calls

var convertMinutesResult = convertMinutesToSeconds(5);
console.log('convertMinutesResult:', convertMinutesResult);

var greetResult = greet('Beavis');
console.log(greetResult);

var areaResult = getArea(17, 42);
console.log('areaResult: ', areaResult);

var firstNameResult = getFirstName({ firstName: 'Randy', lastName: 'Marsh' });
console.log('firstNameResult:', firstNameResult);

var lastElementResult = getLastElement(['i', 'sell', 'propane', 'and', 'propane', 'accessories']);
console.log('lastElementResult:', lastElementResult);
