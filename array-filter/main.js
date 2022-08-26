const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(evenNumber => evenNumber % 2 === 0);
console.log('eventNumbers: ', evenNumbers);

const overFive = numbers.filter(overFive => overFive > 5);
console.log('overFive numbers: ', overFive);

const startWithE = names.filter(name => name[0] === 'E');
console.log('startWithE names: ', startWithE);

const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log('Names that got the D: ', haveD);
