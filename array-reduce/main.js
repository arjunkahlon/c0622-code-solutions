const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, curr) => curr + prev, 0);
console.log(`Sum of numbers array: ${sum}`);

const product = numbers.reduce((prev, curr) => curr * prev);
console.log(`Product of numbers array: ${product}`);

const currentAmount = (prev, curr) => {
  const currentAmount = curr.amount;
  if (curr.type === 'deposit') {
    return prev + currentAmount;
  } else {
    return prev - currentAmount;
  }
};

const balance = account.reduce(currentAmount, 0);
console.log(`Balance of account: ${balance}`);

const composite = traits.reduce((prev, curr) => Object.assign(prev, curr));
console.log('Composite: ', composite);
