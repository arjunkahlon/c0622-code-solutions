const readNotes = require('./readNotes');
const createNote = require('./createNote');
const deleteNote = require('./deleteNote');
const updateNote = require('./updateNote');

if (process.argv.length > 5) {
  console.log('Too many arguments');
} else {
  if (process.argv[2] === 'read') {
    readNotes();
  } else if (process.argv[2] === 'create') {
    createNote(process.argv[3]);
  } else if (process.argv[2] === 'delete') {
    deleteNote(process.argv[3]);
  } else if (process.argv[2] === 'update') {
    updateNote(process.argv[3], process.argv[4]);
  } else {
    console.log('Invalid input.');
  }
}
