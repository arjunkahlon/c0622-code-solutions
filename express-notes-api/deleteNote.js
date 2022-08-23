function deleteNote(id) {
  const data = require('./data.json');
  if (data.notes[id] !== null) {
    delete (data.notes[id]);
  }
}
module.exports = deleteNote;
