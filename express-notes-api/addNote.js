function addNote(obj) {
  const data = require('./data.json');
  obj.id = data.nextId;
  data.notes[data.nextId] = obj;
  if (data.notes[data.nextId] !== null) {
    data.nextId++;
    return obj.id;
  }
}

module.exports = addNote;
