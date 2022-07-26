function ExampleConstructor() {}

console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var ExampleConstructor1 = new ExampleConstructor();
console.log('value of exampleConstructor1:', ExampleConstructor1);

var isInstance = ExampleConstructor1 instanceof ExampleConstructor;
console.log('isInstance value: ', isInstance);
