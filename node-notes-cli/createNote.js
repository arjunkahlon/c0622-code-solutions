function createNote(note) {
  const data = require('./data.json');
  const updateData = require('./updateData');
  data.notes[data.nextId] = note;
  data.nextId++;
  updateData(data);
}

module.exports = createNote;
