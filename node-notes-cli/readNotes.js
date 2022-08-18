function read() {
  const data = require('./data.json');
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}
module.exports = read;
