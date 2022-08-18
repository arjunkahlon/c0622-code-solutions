function deleteNote(number) {
  const data = require('./data.json');
  const updateData = require('./updateData');
  delete data.notes[parseInt(number)];
  updateData(data);
}

module.exports = deleteNote;
