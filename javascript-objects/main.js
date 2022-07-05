var student = {
  firstName: 'Arjun',
  lastName: 'Kahlon',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'eCommerce';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Ford',
  model: 'Maverick',
  year: 2023
};

vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible:"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Sparrky',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
