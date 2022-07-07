// The Math Object

var a = 5;
var b = 23;
var c = 14;

var maximumValue = Math.max(a, b, c);
console.log('maximumValue: ', maximumValue);

var heroes = ['Goku', 'Vegeta', 'Spiderman', 'Batman'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

// Arary Methods

var library = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J. D. Sallinger'
  },
  {
    title: 'The Giver',
    author: 'Louis Lowry'
  }
];

// console.log(library);

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log('library: ', library);

// String Methods

var fullName = 'Arjun Kahlon';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
