const takeAChance = require('./take-a-chance');
const nameProm = takeAChance('Arjun');
nameProm.then(
  value => {
    console.log(value);
  },
  reason => {
    console.error(reason);
  }
);
