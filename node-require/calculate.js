const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const args = [];

for (let i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

if (args.length > 3) {
  console.log('Too many arguments. Please just input 3 total arguments.');
} else {
  if (args[1] === 'plus' || args[1] === '+') {
    console.log('result:', add(args[0], args[2]));
  } else if (args[1] === 'minus' || args[1] === '-') {
    console.log('result:', subtract(args[0], args[2]));
  } else if (args[1] === 'time' || args[1] === 'times' || args[1] === 'x') {
    console.log('result:', multiply(args[0], args[2]));
  } else if (args[1] === 'over' || args[1] === '/') {
    console.log('result:', divide(args[0], args[2]));
  } else {
    console.log('Invalid Input. Please use operators: plus(+), minus(-), times(x), and over(/)');
  }
}
