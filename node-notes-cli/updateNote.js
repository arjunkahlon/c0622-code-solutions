function updateNote(number, note) {
  const data = require('./data.json');
  const updateData = require('./updateData');
  data.notes[parseInt(number)] = note;
  updateData(data);
}

module.exports = updateNote;
